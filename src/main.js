import './index.css'

try {
  const rootElement = document.getElementById("root")
  if (!rootElement) {
    throw new Error("Root element not found")
  }
  
  // アプリケーションの初期化
  initializeApp(rootElement)
} catch (error) {
  console.error("Failed to render app:", error)
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>アプリケーションの読み込みに失敗しました</h1>
      <p>ページを再読み込みしてください。</p>
    </div>
  `
}

function initializeApp(rootElement) {
  // ヘッダーの作成
  const header = createHeader()
  
  // メインコンテンツの作成
  const mainContent = createMainContent()
  
  // DOMに追加
  rootElement.appendChild(header)
  rootElement.appendChild(mainContent)
}

function createHeader() {
  const header = document.createElement('header')
  header.className = 'card-modern border-b border-border/50 sticky top-0 z-50 backdrop-blur-md bg-card/80'
  
  header.innerHTML = `
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
            📚
          </div>
          <div>
            <h1 class="text-xl font-bold text-primary">IT資格進捗管理</h1>
            <p class="text-xs text-muted-foreground">学習の進捗を効率的に管理</p>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <span class="text-sm text-muted-foreground hidden sm:block font-medium">田中太郎さん</span>
          <div class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-105">
            <span class="text-sm">👤</span>
          </div>
        </div>
      </div>
    </div>
  `
  
  return header
}

function createMainContent() {
  const main = document.createElement('main')
  main.className = 'min-h-screen bg-background'
  
  main.innerHTML = `
    <div class="p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-foreground mb-8 text-center">
          IT資格進捗管理
        </h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-card border border-border rounded-lg p-6">
            <h2 class="text-2xl font-semibold text-card-foreground mb-4">進行中の資格</h2>
            <p class="text-muted-foreground">基本情報技術者試験</p>
            <div class="mt-4 bg-muted rounded-full h-2">
              <div class="bg-primary h-2 rounded-full" style="width: 65%"></div>
            </div>
            <p class="text-sm text-muted-foreground mt-2">65% 完了</p>
          </div>
          
          <div class="bg-card border border-border rounded-lg p-6">
            <h2 class="text-2xl font-semibold text-card-foreground mb-4">今日の学習</h2>
            <div class="text-3xl font-bold text-primary mb-2">01:25:30</div>
            <p class="text-muted-foreground">学習時間</p>
            <div class="mt-4 space-y-2">
              <button class="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90" onclick="startStudy()">
                学習開始
              </button>
            </div>
          </div>
        </div>
        
        <div class="mt-8 text-center">
          <p class="text-lg text-foreground">アプリケーションが正常に動作しています！</p>
          <p class="text-muted-foreground">現在時刻: ${new Date().toLocaleString('ja-JP')}</p>
        </div>
      </div>
    </div>
  `
  
  return main
}

// 学習開始ボタンのイベントハンドラー
window.startStudy = function() {
  alert('学習を開始します！')
  console.log('学習開始ボタンがクリックされました')
}
