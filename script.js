// Enhanced Game Database with Categories and Descriptions
const gameDatabase = {
    main: [
        {
            title: "Survival Race",
            image: "https://ext.same-assets.com/482647744/2075044404.png",
            category: "racing",
            description: "Race through dangerous terrain while avoiding obstacles and competing against other players in this thrilling survival racing game.",
            features: ["Multiplayer racing", "Dynamic obstacles", "Vehicle customization", "Power-ups and boosts"]
        },
        {
            title: "1.12 Online",
            image: "https://ext.same-assets.com/482647744/1762205929.png",
            category: "adventure",
            description: "Experience the classic Minecraft 1.12 version online with friends. Build, explore, and survive in procedurally generated worlds.",
            features: ["Multiplayer support", "Creative and survival modes", "Unlimited building", "Resource management"]
        },
        {
            title: "Stick War",
            image: "https://ext.same-assets.com/482647744/3431532157.png",
            category: "action",
            description: "Lead your stick figure army to victory in this strategic warfare game. Command different unit types and conquer enemy territories.",
            features: ["Strategic gameplay", "Multiple unit types", "Campaign mode", "Resource management"]
        },
        {
            title: "Aquapark Build",
            image: "https://ext.same-assets.com/482647744/1212661669.png",
            category: "puzzle",
            description: "Design and build the ultimate water park with thrilling slides, pools, and attractions in this creative building game.",
            features: ["Creative building", "Physics simulation", "Park management", "Visitor satisfaction"]
        },
        {
            title: "ARC",
            image: "https://ext.same-assets.com/482647744/3110276434.png",
            category: "action",
            description: "Master precision shooting in this arcade-style game where timing and accuracy are everything.",
            features: ["Precision shooting", "Multiple weapons", "Challenging levels", "Skill progression"]
        },
        {
            title: "Granny 2",
            image: "https://ext.same-assets.com/482647744/4208721392.png",
            category: "adventure",
            description: "Escape from Granny's house in this suspenseful horror adventure game. Solve puzzles and avoid detection.",
            features: ["Horror atmosphere", "Puzzle solving", "Stealth gameplay", "Multiple escape routes"]
        }
    ],
    action: [
        {
            title: "Mad Stick",
            image: "https://ext.same-assets.com/482647744/1303862904.png",
            category: "action",
            description: "Engage in intense stick figure combat with weapons, special moves, and epic battles.",
            features: ["Combat system", "Weapon variety", "Special abilities", "Boss battles"]
        },
        {
            title: "Call of Battle",
            image: "https://ext.same-assets.com/482647744/938930608.png",
            category: "action",
            description: "Join the battlefield in this first-person shooter with realistic weapons and tactical gameplay.",
            features: ["FPS gameplay", "Weapon customization", "Team-based combat", "Multiple maps"]
        },
        {
            title: "Vex 8",
            image: "https://ext.same-assets.com/482647744/415768384.png",
            category: "action",
            description: "Navigate through challenging platformer levels filled with deadly traps and obstacles.",
            features: ["Platformer action", "Challenging obstacles", "Level editor", "Speed running"]
        },
        {
            title: "FNAF",
            image: "https://ext.same-assets.com/482647744/2075044404.png",
            category: "action",
            description: "Survive the night shift at Freddy's pizza place in this horror survival game.",
            features: ["Horror survival", "Security camera system", "Jump scares", "Multiple nights"]
        },
        {
            title: "Run 3",
            image: "https://ext.same-assets.com/482647744/1762205929.png",
            category: "action",
            description: "Run through space tunnels in this endless runner with gravity-defying gameplay.",
            features: ["Endless running", "Gravity mechanics", "Multiple characters", "Challenging levels"]
        },
        {
            title: "Bank Breakout 2",
            image: "https://ext.same-assets.com/482647744/3431532157.png",
            category: "action",
            description: "Plan and execute the perfect bank heist in this strategic action game.",
            features: ["Heist planning", "Stealth elements", "Multiple approaches", "Security systems"]
        }
    ],
    racing: [
        {
            title: "Drift Race",
            image: "https://ext.same-assets.com/482647744/1826303018.png",
            category: "racing",
            description: "Master the art of drifting in high-speed races through challenging tracks.",
            features: ["Drift mechanics", "Car customization", "Multiple tracks", "Time trials"]
        },
        {
            title: "Cyber Cars",
            image: "https://ext.same-assets.com/482647744/2136144167.png",
            category: "racing",
            description: "Race futuristic cars in neon-lit cyberpunk environments with advanced technology.",
            features: ["Futuristic vehicles", "Neon environments", "High-tech racing", "Speed boosts"]
        },
        {
            title: "Race: Online City",
            image: "https://ext.same-assets.com/482647744/938930608.png",
            category: "racing",
            description: "Compete in online races through detailed city environments with realistic physics.",
            features: ["Online multiplayer", "City racing", "Realistic physics", "Traffic navigation"]
        },
        {
            title: "Car Simulator",
            image: "https://ext.same-assets.com/482647744/1826303018.png",
            category: "racing",
            description: "Experience realistic driving simulation with detailed car mechanics and physics.",
            features: ["Realistic simulation", "Car mechanics", "Open world driving", "Vehicle variety"]
        },
        {
            title: "Poly Track",
            image: "https://ext.same-assets.com/482647744/2075044404.png",
            category: "racing",
            description: "Race on colorful low-poly tracks with smooth gameplay and vibrant visuals.",
            features: ["Low-poly graphics", "Smooth controls", "Colorful tracks", "Time challenges"]
        },
        {
            title: "Monster Truck",
            image: "https://ext.same-assets.com/482647744/1762205929.png",
            category: "racing",
            description: "Drive massive monster trucks over obstacles and challenging terrain.",
            features: ["Monster truck physics", "Obstacle courses", "Terrain variety", "Truck customization"]
        }
    ],
    puzzle: [
        {
            title: "Helix Jump",
            image: "https://ext.same-assets.com/482647744/2151520266.png",
            category: "puzzle",
            description: "Guide the bouncing ball through rotating helix platforms in this addictive puzzle game.",
            features: ["Physics puzzles", "Rotating platforms", "Precision timing", "Endless levels"]
        },
        {
            title: "Draw Climber",
            image: "https://ext.same-assets.com/482647744/4050344743.png",
            category: "puzzle",
            description: "Draw legs for your character to climb over obstacles and reach the finish line.",
            features: ["Creative drawing", "Physics simulation", "Obstacle navigation", "Custom solutions"]
        },
        {
            title: "Google Docs",
            image: "https://ext.same-assets.com/482647744/2478268855.png",
            category: "puzzle",
            description: "A creative puzzle game disguised as a productivity tool. Solve document-based challenges.",
            features: ["Document puzzles", "Creative thinking", "Text manipulation", "Logic challenges"]
        },
        {
            title: "Impossible Quiz",
            image: "https://ext.same-assets.com/482647744/4050344743.png",
            category: "puzzle",
            description: "Test your knowledge and creativity with impossible questions and unexpected answers.",
            features: ["Tricky questions", "Creative thinking", "Unexpected solutions", "Humor elements"]
        },
        {
            title: "SnowBall.io",
            image: "https://ext.same-assets.com/482647744/2151520266.png",
            category: "puzzle",
            description: "Roll snowballs and compete with other players in this strategic multiplayer puzzle game.",
            features: ["Multiplayer strategy", "Ball physics", "Territory control", "Competitive gameplay"]
        },
        {
            title: "Supermario63",
            image: "https://ext.same-assets.com/482647744/2478268855.png",
            category: "puzzle",
            description: "Classic platformer with puzzle elements, featuring Mario-style gameplay and challenges.",
            features: ["Platform puzzles", "Classic gameplay", "Level progression", "Power-ups"]
        }
    ],
    sports: [
        {
            title: "Basket Random",
            image: "https://ext.same-assets.com/482647744/2081383487.png",
            category: "sports",
            description: "Play basketball with unpredictable physics and random court conditions for hilarious gameplay.",
            features: ["Random physics", "Basketball gameplay", "Multiplayer support", "Funny animations"]
        },
        {
            title: "Tap Goal",
            image: "https://ext.same-assets.com/482647744/2136144167.png",
            category: "sports",
            description: "Score goals with simple tap controls in this addictive soccer game.",
            features: ["Simple controls", "Soccer gameplay", "Skill challenges", "Tournament mode"]
        },
        {
            title: "Boxing Random",
            image: "https://ext.same-assets.com/482647744/2081383487.png",
            category: "sports",
            description: "Engage in hilarious boxing matches with unpredictable physics and random events.",
            features: ["Boxing combat", "Random physics", "Funny animations", "Tournament battles"]
        },
        {
            title: "Volley Random",
            image: "https://ext.same-assets.com/482647744/2136144167.png",
            category: "sports",
            description: "Play volleyball with crazy physics and random court conditions.",
            features: ["Volleyball gameplay", "Physics simulation", "Random elements", "Competitive matches"]
        },
        {
            title: "Soccer Random",
            image: "https://ext.same-assets.com/482647744/938930608.png",
            category: "sports",
            description: "Experience soccer like never before with unpredictable gameplay and funny physics.",
            features: ["Soccer gameplay", "Random physics", "Multiplayer mode", "Funny moments"]
        },
        {
            title: "Happy Wheels",
            image: "https://ext.same-assets.com/482647744/1582686337.png",
            category: "sports",
            description: "Navigate obstacle courses with various vehicles in this physics-based sports game.",
            features: ["Physics simulation", "Vehicle variety", "Obstacle courses", "User-generated content"]
        }
    ],
    adventure: [
        {
            title: "Geometry Dash",
            image: "https://ext.same-assets.com/482647744/3378318824.png",
            category: "adventure",
            description: "Jump and fly through challenging geometric landscapes with rhythm-based gameplay.",
            features: ["Rhythm gameplay", "Challenging levels", "Music synchronization", "Level editor"]
        },
        {
            title: "Snow Rider",
            image: "https://ext.same-assets.com/482647744/1582686337.png",
            category: "adventure",
            description: "Ride through snowy mountains and perform tricks in this winter sports adventure.",
            features: ["Winter sports", "Trick system", "Mountain environments", "Speed challenges"]
        },
        {
            title: "Minecraft Shooter",
            image: "https://ext.same-assets.com/482647744/4208721392.png",
            category: "adventure",
            description: "Explore Minecraft worlds while defending against hostile mobs in this shooter adventure.",
            features: ["Minecraft world", "Shooting mechanics", "Mob battles", "Exploration elements"]
        },
        {
            title: "Fish Eat",
            image: "https://ext.same-assets.com/482647744/3378318824.png",
            category: "adventure",
            description: "Start as a small fish and grow by eating smaller fish in this underwater adventure.",
            features: ["Growth mechanics", "Underwater world", "Survival gameplay", "Size progression"]
        },
        {
            title: "Obby 99% Lose",
            image: "https://ext.same-assets.com/482647744/1582686337.png",
            category: "adventure",
            description: "Navigate through extremely challenging obstacle courses in this difficult adventure game.",
            features: ["Extreme difficulty", "Obstacle navigation", "Precision platforming", "Challenge progression"]
        },
        {
            title: "Quiz 2",
            image: "https://ext.same-assets.com/482647744/4208721392.png",
            category: "adventure",
            description: "Test your knowledge in various subjects with this interactive quiz adventure.",
            features: ["Knowledge testing", "Multiple categories", "Educational content", "Progress tracking"]
        }
    ],
    new: [
        {
            title: "Crazy Crash",
            image: "https://ext.same-assets.com/482647744/2075044404.png",
            category: "racing",
            description: "Experience high-speed crashes and destruction in this action-packed racing game.",
            features: ["Crash physics", "Vehicle destruction", "High-speed racing", "Spectacular effects"]
        },
        {
            title: "Elastic Man",
            image: "https://ext.same-assets.com/482647744/1762205929.png",
            category: "puzzle",
            description: "Stretch and manipulate an elastic character in this satisfying physics sandbox.",
            features: ["Elastic physics", "Sandbox gameplay", "Stress relief", "Interactive mechanics"]
        },
        {
            title: "Schoolboy Escape",
            image: "https://ext.same-assets.com/482647744/3431532157.png",
            category: "adventure",
            description: "Help a schoolboy escape from various challenging situations using wit and creativity.",
            features: ["Escape mechanics", "Puzzle solving", "Creative solutions", "Story-driven gameplay"]
        },
        {
            title: "They Are Coming",
            image: "https://ext.same-assets.com/482647744/1212661669.png",
            category: "action",
            description: "Defend against waves of enemies in this intense survival action game.",
            features: ["Wave defense", "Survival gameplay", "Weapon upgrades", "Intense action"]
        },
        {
            title: "Duck Clicker",
            image: "https://ext.same-assets.com/482647744/3110276434.png",
            category: "puzzle",
            description: "Click to collect ducks and unlock new features in this addictive clicker game.",
            features: ["Clicker mechanics", "Collection system", "Upgrades", "Idle progression"]
        },
        {
            title: "Extreme Racing",
            image: "https://ext.same-assets.com/482647744/4208721392.png",
            category: "racing",
            description: "Race in extreme conditions with powerful vehicles and challenging tracks.",
            features: ["Extreme conditions", "Powerful vehicles", "Challenging tracks", "Weather effects"]
        }
    ]
};

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupToggleButton();
    }

    applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        this.updateToggleIcon(theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    updateToggleIcon(theme) {
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');

        if (theme === 'light') {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    }

    setupToggleButton() {
        const toggleButton = document.getElementById('themeToggle');
        toggleButton.addEventListener('click', () => {
            const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.applyTheme(newTheme);
        });
    }
}

// Search Functionality
class SearchManager {
    constructor(gameManager) {
        this.gameManager = gameManager;
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');
        this.searchGames = document.getElementById('search-games');
        this.noResults = document.getElementById('noResults');
        this.init();
    }

    init() {
        this.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSearch(e.target.value);
            }
        });
    }

    handleSearch(query) {
        if (query.trim().length === 0) {
            this.hideSearchResults();
            return;
        }

        const results = this.searchGames(query.toLowerCase());
        this.displaySearchResults(results, query);
    }

    searchGames(query) {
        const allGames = [];
        Object.values(gameDatabase).forEach(category => {
            allGames.push(...category);
        });

        return allGames.filter(game =>
            game.title.toLowerCase().includes(query) ||
            game.category.toLowerCase().includes(query) ||
            game.description.toLowerCase().includes(query)
        );
    }

    displaySearchResults(results, query) {
        this.searchGames.innerHTML = '';

        if (results.length === 0) {
            this.noResults.classList.remove('hidden');
            this.searchGames.classList.add('hidden');
        } else {
            this.noResults.classList.add('hidden');
            this.searchGames.classList.remove('hidden');
            this.gameManager.populateGames(results, 'search-games');
        }

        this.searchResults.classList.remove('hidden');
        this.gameManager.hideAllSections();

        // Smooth scroll to results
        this.searchResults.scrollIntoView({ behavior: 'smooth' });
    }

    hideSearchResults() {
        this.searchResults.classList.add('hidden');
        this.gameManager.showSection('all');
    }
}

// Game Modal Manager
class ModalManager {
    constructor() {
        this.modal = document.getElementById('gameModal');
        this.modalOverlay = document.getElementById('modalOverlay');
        this.modalClose = document.getElementById('modalClose');
        this.init();
    }

    init() {
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', () => this.closeModal());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }

    openModal(game) {
        this.populateModal(game);
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Smooth animation
        setTimeout(() => {
            this.modal.classList.add('show');
        }, 10);
    }

    closeModal() {
        this.modal.classList.remove('show');
        setTimeout(() => {
            this.modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }

    populateModal(game) {
        document.getElementById('modalGameImage').src = game.image;
        document.getElementById('modalGameTitle').textContent = game.title;
        document.getElementById('modalGameCategory').textContent = game.category.toUpperCase();
        document.getElementById('modalGameDescription').textContent = game.description;

        const featuresList = document.getElementById('modalGameFeatures');
        featuresList.innerHTML = '';
        game.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }
}

// Main Game Manager
class GameManager {
    constructor() {
        this.currentCategory = 'all';
        this.modalManager = new ModalManager();
        this.init();
    }

    init() {
        this.populateAllGames();
        this.setupNavigation();
        this.setupAnimations();
    }

    populateAllGames() {
        Object.keys(gameDatabase).forEach(category => {
            if (category === 'main') {
                this.populateGames(gameDatabase[category], 'main-games');
            } else {
                this.populateGames(gameDatabase[category], `${category}-games`);
            }
        });
    }

    populateGames(games, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        games.forEach((game, index) => {
            const gameCard = this.createGameCard(game, index);
            container.appendChild(gameCard);
        });
    }

    createGameCard(game, index) {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.style.animationDelay = `${index * 0.1}s`;

        gameCard.innerHTML = `
            <div class="game-image">
                <img src="${game.image}" alt="${game.title}" loading="lazy">
            </div>
            <h3 class="game-title">${game.title}</h3>
        `;

        gameCard.addEventListener('click', () => {
            this.modalManager.openModal(game);
        });

        return gameCard;
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');

        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                this.switchCategory(category);

                // Update active button
                navButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    switchCategory(category) {
        this.currentCategory = category;
        this.hideAllSections();
        this.showSection(category);
    }

    hideAllSections() {
        const sections = document.querySelectorAll('.games-section');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
    }

    showSection(category) {
        const sections = document.querySelectorAll(`[data-category="${category}"]`);
        sections.forEach(section => {
            section.classList.remove('hidden');
        });

        // Smooth scroll to first visible section
        if (sections.length > 0) {
            sections[0].scrollIntoView({ behavior: 'smooth' });
        }
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        // Observe all game cards and sections
        document.querySelectorAll('.game-card, .games-section').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const themeManager = new ThemeManager();
    const gameManager = new GameManager();
    const searchManager = new SearchManager(gameManager);

    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    console.log('🎮 Unblocked Games G+ Enhanced - Ready to play!');
});
