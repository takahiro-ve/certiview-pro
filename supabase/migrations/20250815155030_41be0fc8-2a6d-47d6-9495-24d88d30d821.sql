-- Create certifications table
CREATE TABLE public.certifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  exam_date DATE,
  target_hours INTEGER DEFAULT 0,
  current_hours DECIMAL DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused')),
  category TEXT DEFAULT 'IT',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create study_sessions table
CREATE TABLE public.study_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  certification_id UUID NOT NULL REFERENCES public.certifications(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  duration INTEGER NOT NULL, -- in seconds
  session_date DATE DEFAULT CURRENT_DATE,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for certifications
CREATE POLICY "Users can view their own certifications" 
ON public.certifications 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own certifications" 
ON public.certifications 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own certifications" 
ON public.certifications 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own certifications" 
ON public.certifications 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create RLS policies for study_sessions
CREATE POLICY "Users can view their own study sessions" 
ON public.study_sessions 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own study sessions" 
ON public.study_sessions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own study sessions" 
ON public.study_sessions 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own study sessions" 
ON public.study_sessions 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_certifications_updated_at
  BEFORE UPDATE ON public.certifications
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to update current_hours when study sessions are added
CREATE OR REPLACE FUNCTION public.update_certification_hours()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.certifications 
    SET current_hours = current_hours + (NEW.duration / 3600.0)
    WHERE id = NEW.certification_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.certifications 
    SET current_hours = current_hours - (OLD.duration / 3600.0)
    WHERE id = OLD.certification_id;
    RETURN OLD;
  ELSIF TG_OP = 'UPDATE' THEN
    UPDATE public.certifications 
    SET current_hours = current_hours - (OLD.duration / 3600.0) + (NEW.duration / 3600.0)
    WHERE id = NEW.certification_id;
    RETURN NEW;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update certification hours
CREATE TRIGGER update_certification_hours_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.study_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_certification_hours();