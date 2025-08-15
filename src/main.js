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
  
  // エラー表示用のDOM要素を作成
  const errorContainer = document.createElement('div')
  errorContainer.style.cssText = 'padding: 20px; text-align: center; font-family: Arial, sans-serif;'
  
  const errorTitle = document.createElement('h1')
  errorTitle.textContent = 'アプリケーションの読み込みに失敗しました'
  
  const errorMessage = document.createElement('p')
  errorMessage.textContent = 'ページを再読み込みしてください。'
  
  errorContainer.appendChild(errorTitle)
  errorContainer.appendChild(errorMessage)
  document.body.appendChild(errorContainer)
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
  
  const container = document.createElement('div')
  container.className = 'container mx-auto px-4 py-4'
  
  const flexContainer = document.createElement('div')
  flexContainer.className = 'flex justify-between items-center'
  
  // 左側のコンテンツ
  const leftContent = document.createElement('div')
  leftContent.className = 'flex items-center space-x-3'
  
  const icon = document.createElement('div')
  icon.className = 'w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md'
  icon.textContent = '📚'
  
  const titleContainer = document.createElement('div')
  
  const title = document.createElement('h1')
  title.className = 'text-xl font-bold text-primary'
  title.textContent = 'IT資格進捗管理'
  
  const subtitle = document.createElement('p')
  subtitle.className = 'text-xs text-muted-foreground'
  subtitle.textContent = '学習の進捗を効率的に管理'
  
  titleContainer.appendChild(title)
  titleContainer.appendChild(subtitle)
  
  leftContent.appendChild(icon)
  leftContent.appendChild(titleContainer)
  
  // 右側のコンテンツ
  const rightContent = document.createElement('div')
  rightContent.className = 'flex items-center space-x-4'
  
  const userName = document.createElement('span')
  userName.className = 'text-sm text-muted-foreground hidden sm:block font-medium'
  userName.textContent = '田中太郎さん'
  
  const userIcon = document.createElement('div')
  userIcon.className = 'w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-105'
  
  const userIconText = document.createElement('span')
  userIconText.className = 'text-sm'
  userIconText.textContent = '👤'
  
  userIcon.appendChild(userIconText)
  
  rightContent.appendChild(userName)
  rightContent.appendChild(userIcon)
  
  flexContainer.appendChild(leftContent)
  flexContainer.appendChild(rightContent)
  container.appendChild(flexContainer)
  header.appendChild(container)
  
  return header
}

function createMainContent() {
  const main = document.createElement('main')
  main.className = 'min-h-screen bg-background'
  
  const container = document.createElement('div')
  container.className = 'p-8'
  
  const maxWidthContainer = document.createElement('div')
  maxWidthContainer.className = 'max-w-4xl mx-auto'
  
  // メインタイトル
  const mainTitle = document.createElement('h1')
  mainTitle.className = 'text-4xl font-bold text-foreground mb-8 text-center'
  mainTitle.textContent = 'IT資格進捗管理'
  
  // グリッドコンテナ
  const gridContainer = document.createElement('div')
  gridContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-6'
  
  // 左側のカード（進行中の資格）
  const leftCard = createCertificationCard()
  
  // 右側のカード（今日の学習）
  const rightCard = createStudyCard()
  
  gridContainer.appendChild(leftCard)
  gridContainer.appendChild(rightCard)
  
  // フッター情報
  const footer = document.createElement('div')
  footer.className = 'mt-8 text-center'
  
  const statusText = document.createElement('p')
  statusText.className = 'text-lg text-foreground'
  statusText.textContent = 'アプリケーションが正常に動作しています！'
  
  const timeText = document.createElement('p')
  timeText.className = 'text-muted-foreground'
  timeText.textContent = `現在時刻: ${new Date().toLocaleString('ja-JP')}`
  
  footer.appendChild(statusText)
  footer.appendChild(timeText)
  
  maxWidthContainer.appendChild(mainTitle)
  maxWidthContainer.appendChild(gridContainer)
  maxWidthContainer.appendChild(footer)
  container.appendChild(maxWidthContainer)
  main.appendChild(container)
  
  return main
}

function createCertificationCard() {
  const card = document.createElement('div')
  card.className = 'bg-card border border-border rounded-lg p-6'
  
  const title = document.createElement('h2')
  title.className = 'text-2xl font-semibold text-card-foreground mb-4'
  title.textContent = '進行中の資格'
  
  const description = document.createElement('p')
  description.className = 'text-muted-foreground'
  description.textContent = '基本情報技術者試験'
  
  const progressContainer = document.createElement('div')
  progressContainer.className = 'mt-4 bg-muted rounded-full h-2'
  
  const progressBar = document.createElement('div')
  progressBar.className = 'bg-primary h-2 rounded-full'
  progressBar.style.width = '65%'
  
  const progressText = document.createElement('p')
  progressText.className = 'text-sm text-muted-foreground mt-2'
  progressText.textContent = '65% 完了'
  
  progressContainer.appendChild(progressBar)
  
  card.appendChild(title)
  card.appendChild(description)
  card.appendChild(progressContainer)
  card.appendChild(progressText)
  
  return card
}

function createStudyCard() {
  const card = document.createElement('div')
  card.className = 'bg-card border border-border rounded-lg p-6'
  
  const title = document.createElement('h2')
  title.className = 'text-2xl font-semibold text-card-foreground mb-4'
  title.textContent = '今日の学習'
  
  const timeDisplay = document.createElement('div')
  timeDisplay.className = 'text-3xl font-bold text-primary mb-2'
  timeDisplay.textContent = '01:25:30'
  
  const timeLabel = document.createElement('p')
  timeLabel.className = 'text-muted-foreground'
  timeLabel.textContent = '学習時間'
  
  const buttonContainer = document.createElement('div')
  buttonContainer.className = 'mt-4 space-y-2'
  
  const startButton = document.createElement('button')
  startButton.className = 'w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90'
  startButton.textContent = '学習開始'
  startButton.addEventListener('click', startStudy)
  
  buttonContainer.appendChild(startButton)
  
  card.appendChild(title)
  card.appendChild(timeDisplay)
  card.appendChild(timeLabel)
  card.appendChild(buttonContainer)
  
  return card
}

// 学習開始ボタンのイベントハンドラー
function startStudy() {
  alert('学習を開始します！')
  console.log('学習開始ボタンがクリックされました')
}
