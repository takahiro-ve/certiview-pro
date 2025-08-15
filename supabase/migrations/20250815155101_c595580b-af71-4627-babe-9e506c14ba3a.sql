-- Fix security issues by setting search_path for functions
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_certification_hours()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
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
$$;