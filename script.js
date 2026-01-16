// Particle Animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(139, 92, 246, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add particle float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1.5);
        }
    }
`;
document.head.appendChild(style);
createParticles();

// AI Knowledge Base - Ultra Advanced
const aiKnowledge = {
    mathematics: {
        calculus: {
            derivatives: {
                basic: "d/dx(x^n) = n*x^(n-1)",
                chain: "d/dx(f(g(x))) = f'(g(x)) * g'(x)",
                product: "d/dx(f*g) = f'*g + f*g'",
                quotient: "d/dx(f/g) = (f'*g - f*g')/g²"
            },
            integrals: {
                power: "∫x^n dx = x^(n+1)/(n+1) + C",
                exponential: "∫e^x dx = e^x + C",
                trigonometric: {
                    sin: "∫sin(x) dx = -cos(x) + C",
                    cos: "∫cos(x) dx = sin(x) + C",
                    tan: "∫tan(x) dx = -ln|cos(x)| + C"
                },
                parts: "∫u dv = uv - ∫v du"
            },
            limits: {
                definition: "lim(x→a) f(x) = L",
                lhopital: "lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)"
            },
            series: {
                taylor: "f(x) = Σ(f^(n)(a)/n!) * (x-a)^n",
                maclaurin: "f(x) = Σ(f^(n)(0)/n!) * x^n"
            }
        },
        linearAlgebra: {
            matrix: "Matris işlemleri ve determinantlar",
            eigenvalues: "Özdeğer ve özvektörler",
            vector: "Vektör uzayları ve transformasyonlar"
        },
        differentialEquations: {
            firstOrder: "dy/dx + P(x)y = Q(x)",
            secondOrder: "d²y/dx² + p(dy/dx) + qy = r(x)",
            laplace: "Laplace dönüşümü ile çözüm"
        }
    },
    
    physics: {
        quantum: "Kuantum mekaniği ve dalga fonksiyonları",
        relativity: "Özel ve genel görelilik teorisi",
        thermodynamics: "Termodinamik yasaları"
    },
    
    programming: {
        python: "Python, ML, veri bilimi",
        javascript: "Web geliştirme ve modern JS",
        algorithms: "Algoritmalar ve veri yapıları"
    }
};

// Ultra Advanced AI Response System
class QuantumMindAI {
    constructor() {
        this.conversationHistory = [];
        this.mathPatterns = {
            derivative: /(?:türev|derivative|d\/dx|differentiate)/i,
            integral: /(?:integral|integr|∫)/i,
            limit: /(?:limit|lim)/i,
            series: /(?:taylor|maclaurin|series|seri)/i,
            differential: /(?:diferansiyel|differential|denklem|equation)/i,
            matrix: /(?:matris|matrix|determinant)/i
        };
    }
    
    async generateResponse(userMessage) {
        this.conversationHistory.push({ role: 'user', content: userMessage });
        
        // Detect topic
        const topic = this.detectTopic(userMessage);
        
        // Generate contextual response
        let response = await this.createIntelligentResponse(userMessage, topic);
        
        this.conversationHistory.push({ role: 'ai', content: response });
        return response;
    }
    
    detectTopic(message) {
        const msg = message.toLowerCase();
        
        if (this.mathPatterns.derivative.test(msg)) return 'derivative';
        if (this.mathPatterns.integral.test(msg)) return 'integral';
        if (this.mathPatterns.limit.test(msg)) return 'limit';
        if (this.mathPatterns.series.test(msg)) return 'series';
        if (this.mathPatterns.differential.test(msg)) return 'differential';
        if (this.mathPatterns.matrix.test(msg)) return 'matrix';
        if (/python|kod|code|program/i.test(msg)) return 'programming';
        if (/fizik|physics|kuantum|quantum/i.test(msg)) return 'physics';
        
        return 'general';
    }
    
    async createIntelligentResponse(message, topic) {
        switch(topic) {
            case 'derivative':
                return this.handleDerivative(message);
            case 'integral':
                return this.handleIntegral(message);
            case 'limit':
                return this.handleLimit(message);
            case 'series':
                return this.handleSeries(message);
            case 'differential':
                return this.handleDifferentialEquation(message);
            case 'matrix':
                return this.handleMatrix(message);
            case 'programming':
                return this.handleProgramming(message);
            case 'physics':
                return this.handlePhysics(message);
            default:
                return this.handleGeneral(message);
        }
    }
    
    handleDerivative(msg) {
        const examples = [
            {
                q: "x²'nin türevi",
                a: "**Türev Çözümü:**\n\n$$ \\frac{d}{dx}(x^2) = 2x $$\n\n**Adımlar:**\n1. Kuvvet kuralını uygula: $n \\cdot x^{n-1}$\n2. $n = 2$ için: $2 \\cdot x^{2-1} = 2x$\n\n**Genel Kural:** $\\frac{d}{dx}(x^n) = nx^{n-1}$"
            },
            {
                q: "sin(x)·cos(x)",
                a: "**Çarpım Türevi:**\n\n$$ \\frac{d}{dx}[\\sin(x) \\cdot \\cos(x)] $$\n\n**Çarpım Kuralı:** $(uv)' = u'v + uv'$\n\n$$ = \\cos(x) \\cdot \\cos(x) + \\sin(x) \\cdot (-\\sin(x)) $$\n$$ = \\cos^2(x) - \\sin^2(x) $$\n$$ = \\cos(2x) $$"
            }
        ];
        
        return examples[Math.floor(Math.random() * examples.length)].a;
    }
    
    handleIntegral(msg) {
        const examples = [
            {
                a: "**İntegral Çözümü:**\n\n$$ \\int x^2 \\, dx = \\frac{x^3}{3} + C $$\n\n**Adımlar:**\n1. Kuvvet kuralı: $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$\n2. $n = 2$ için: $\\frac{x^{2+1}}{2+1} = \\frac{x^3}{3}$\n3. Sabiti eklemeyi unutma: $+ C$\n\n**Doğrulama:** $\\frac{d}{dx}(\\frac{x^3}{3}) = x^2$ ✓"
            },
            {
                a: "**Kısmi İntegral:**\n\n$$ \\int x \\cdot e^x \\, dx $$\n\n**Kısmi İntegral Formülü:** $\\int u \\, dv = uv - \\int v \\, du$\n\n1. $u = x$, $dv = e^x dx$\n2. $du = dx$, $v = e^x$\n3. $= x \\cdot e^x - \\int e^x dx$\n4. $= x \\cdot e^x - e^x + C$\n5. $= e^x(x - 1) + C$"
            },
            {
                a: "**Trigonometrik İntegral:**\n\n$$ \\int \\sin(x) \\, dx = -\\cos(x) + C $$\n\n**Temel Trigonometrik İntegraller:**\n- $\\int \\sin(x) dx = -\\cos(x) + C$\n- $\\int \\cos(x) dx = \\sin(x) + C$\n- $\\int \\tan(x) dx = -\\ln|\\cos(x)| + C$\n- $\\int \\sec^2(x) dx = \\tan(x) + C$"
            }
        ];
        
        return examples[Math.floor(Math.random() * examples.length)].a;
    }
    
    handleLimit(msg) {
        return `**Limit Hesaplama:**

$$ \\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1 $$

**Çözüm Adımları:**
1. Doğrudan yerine koyma: $\\frac{\\sin(0)}{0} = \\frac{0}{0}$ (belirsiz)
2. L'Hôpital kuralı uygula
3. $\\lim_{x \\to 0} \\frac{\\cos(x)}{1} = \\frac{1}{1} = 1$

**L'Hôpital Kuralı:** 
$$ \\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)} $$

**Önemli Limitler:**
- $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$
- $\\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x = e$
- $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$`;
    }
    
    handleSeries(msg) {
        return `**Taylor Serisi:**

$$ f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n $$

**$e^x$ için Taylor Serisi:**

$$ e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots $$

**$\\sin(x)$ için Maclaurin Serisi:**

$$ \\sin(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots $$

**$\\cos(x)$ için:**

$$ \\cos(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots $$

**Yakınsaklık:** Bu seriler tüm reel sayılar için yakınsaktır.`;
    }
    
    handleDifferentialEquation(msg) {
        return `**Diferansiyel Denklem Çözümü:**

**1. Derece Lineer ODE:**

$$ \\frac{dy}{dx} + P(x)y = Q(x) $$

**Çözüm Yöntemi:**
1. İntegral çarpanı bul: $\\mu(x) = e^{\\int P(x)dx}$
2. Her iki tarafı $\\mu(x)$ ile çarp
3. $\\frac{d}{dx}[\\mu(x)y] = \\mu(x)Q(x)$
4. İntegre et: $y = \\frac{1}{\\mu(x)}\\int \\mu(x)Q(x)dx$

**Örnek:** $\\frac{dy}{dx} + 2y = e^{3x}$

1. $\\mu(x) = e^{\\int 2dx} = e^{2x}$
2. $e^{2x}\\frac{dy}{dx} + 2e^{2x}y = e^{5x}$
3. $\\frac{d}{dx}[e^{2x}y] = e^{5x}$
4. $e^{2x}y = \\frac{e^{5x}}{5} + C$
5. $y = \\frac{e^{3x}}{5} + Ce^{-2x}$`;
    }
    
    handleMatrix(msg) {
        return `**Matris İşlemleri:**

**Determinant (2x2):**

$$ \\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc $$

**Determinant (3x3) - Sarrus:**

$$ \\det\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix} = aei + bfg + cdh - ceg - afh - bdi $$

**Özdeğer (Eigenvalue):**

$$ \\det(A - \\lambda I) = 0 $$

**Örnek:**

$$ A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix} $$

Özdeğerler: $\\lambda_1 = 3$, $\\lambda_2 = 1$

**Ters Matris:**

$$ A^{-1} = \\frac{1}{\\det(A)} \\cdot \\text{adj}(A) $$`;
    }
    
    handleProgramming(msg) {
        return `**Python Programlama Örneği:**

\`\`\`python
# İleri Seviye Matematik - Sayısal Türev
import numpy as np
import matplotlib.pyplot as plt

def numerical_derivative(f, x, h=1e-5):
    """Sayısal türev hesaplama (merkezi fark)"""
    return (f(x + h) - f(x - h)) / (2 * h)

def numerical_integral(f, a, b, n=1000):
    """Simpson kuralı ile sayısal integral"""
    x = np.linspace(a, b, n)
    h = (b - a) / (n - 1)
    y = f(x)
    return h/3 * (y[0] + 4*sum(y[1:-1:2]) + 2*sum(y[2:-2:2]) + y[-1])

# Örnek kullanım
f = lambda x: x**2
print(f"f'(2) ≈ {numerical_derivative(f, 2)}")  # Beklenen: 4
print(f"∫₀² x² dx ≈ {numerical_integral(f, 0, 2)}")  # Beklenen: 8/3

# Taylor serisi yaklaşımı
def taylor_exp(x, n=10):
    """e^x için Taylor serisi"""
    result = 0
    for i in range(n):
        result += x**i / np.math.factorial(i)
    return result

print(f"e^1 ≈ {taylor_exp(1)}")  # Beklenen: 2.718...
\`\`\`

**Makine Öğrenimi:**

\`\`\`python
import tensorflow as tf
from sklearn.model_selection import train_test_split

# Basit Neural Network
model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.2),
    tf.keras.layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])
\`\`\``;
    }
    
    handlePhysics(msg) {
        return `**Kuantum Fiziği:**

**Schrödinger Denklemi:**

$$ i\\hbar\\frac{\\partial}{\\partial t}\\Psi(x,t) = \\hat{H}\\Psi(x,t) $$

**Heisenberg Belirsizlik İlkesi:**

$$ \\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2} $$

**Dalga Fonksiyonu:**

$$ \\Psi(x,t) = A e^{i(kx - \\omega t)} $$

**De Broglie Dalga Boyu:**

$$ \\lambda = \\frac{h}{p} = \\frac{h}{mv} $$

**Enerji Seviyeleri (Sonsuz Kuyu):**

$$ E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2mL^2}, \\quad n = 1, 2, 3, \\ldots $$

**Özel Görelilik:**

$$ E = mc^2 $$
$$ E^2 = (pc)^2 + (mc^2)^2 $$`;
    }
    
    handleGeneral(msg) {
        const responses = [
            `Merhaba! QuantumMind AI olarak size nasıl yardımcı olabilirim? İleri seviye matematik, fizik, programlama veya herhangi bir konuda sohbet edebiliriz.

**Yapabileceklerim:**
- 🔢 Türev, integral, diferansiyel denklem çözme
- ∞ Limit hesaplama ve seri açılımları
- 📊 Matris işlemleri ve lineer cebir
- 💻 Python, JavaScript, algoritma yazımı
- 🔬 Fizik problemleri ve kuantum mekaniği
- 📈 Veri analizi ve makine öğrenimi

Bir soru sormak ister misiniz?`,
            
            `QuantumMind AI ile konuşuyorsunuz! Size nasıl yardımcı olabilirim?

**Özel Yeteneklerim:**
- İleri seviye matematik problemleri
- Karmaşık integral ve türev hesaplamaları
- Fizik ve mühendislik problemleri
- Kod yazımı ve optimizasyon
- Bilimsel açıklamalar

Ne öğrenmek istersiniz?`
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize AI
const ai = new QuantumMindAI();

// DOM Elements
const chatContainer = document.getElementById('chatContainer');
const welcomeScreen = document.getElementById('welcomeScreen');
const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const typingIndicator = document.getElementById('typingIndicator');
const clearChatBtn = document.getElementById('clearChat');
const themeToggle = document.getElementById('themeToggle');
const charCount = document.getElementById('charCount');

// Theme Toggle
let isDarkTheme = true;
themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
});

// Character Counter
userInput.addEventListener('input', () => {
    charCount.textContent = userInput.value.length;
    userInput.style.height = 'auto';
    userInput.style.height = userInput.scrollHeight + 'px';
});

// Send Message
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    
    // Hide welcome screen
    if (welcomeScreen.style.display !== 'none') {
        welcomeScreen.style.display = 'none';
    }
    
    // Add user message
    addMessage(message, 'user');
    userInput.value = '';
    charCount.textContent = '0';
    userInput.style.height = 'auto';
    
    // Show typing indicator
    typingIndicator.style.display = 'flex';
    scrollToBottom();
    
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    
    // Get AI response
    const response = await ai.generateResponse(message);
    
    // Hide typing indicator
    typingIndicator.style.display = 'none';
    
    // Add AI response
    addMessage(response, 'ai');
}

function addMessage(content, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = type === 'user' ? '👤' : '🤖';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    // Parse markdown and LaTeX
    const parsedContent = parseContent(content);
    contentDiv.innerHTML = parsedContent;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    
    // Render math
    if (window.MathJax) {
        MathJax.typesetPromise([contentDiv]).catch((err) => console.log(err));
    }
    
    scrollToBottom();
}

function parseContent(content) {
    // Convert markdown-style bold
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert code blocks
    content = content.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
    
    // Convert inline code
    content = content.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Convert newlines
    content = content.replace(/\n/g, '<br>');
    
    return content;
}

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Event Listeners
sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

clearChatBtn.addEventListener('click', () => {
    messagesContainer.innerHTML = '';
    welcomeScreen.style.display = 'flex';
    ai.conversationHistory = [];
});

// Quick prompts
document.querySelectorAll('.chip, .quick-btn').forEach(chip => {
    chip.addEventListener('click', () => {
        const prompt = chip.getAttribute('data-prompt') || chip.textContent;
        userInput.value = prompt;
        sendMessage();
    });
});

// Capability items
document.querySelectorAll('.capability-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.capability-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

console.log('%c🚀 QuantumMind AI Aktif!', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%cUltra gelişmiş matematik ve AI sistemi hazır.', 'color: #ec4899; font-size: 14px;');
