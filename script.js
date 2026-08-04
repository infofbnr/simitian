const far = `
        <div class="introduction">
            <h1 class="introduction">What is Simitian?</h1>
            <p class="siki">The Simitian Buildings are a group of buildings located on the same site that are designed to work together as a single unit located in Antelias.</p>
        </div>
        <div>
            <h1 class="introduction">Introducing the Gang</h1>
            
            <!-- Christina -->
            <div class="main-div">
                <div class="main-button">
                    <h1>Christina Kilislian</h1>
                    <button class="butt" id="edward-1">▼</button>
                </div>
                <div class="nigger" id="balls-1">
                    <img src="kilis.jpg" alt="Christina Kilislian">
                    <p>Hostess, loved by all.</p>
                </div>
            </div>

            <!-- Hrag -->
            <div class="main-div">
                <div class="main-button">
                    <h1>Hrag Saboundjian</h1>
                    <button class="butt" id="edward-2">▼</button>
                </div>
                <div class="nigger" id="balls-2">
                    <img src="hrag.jpg" alt="Hrag Saboundjian">
                    <p>Sexy and classy.</p>
                </div>
            </div>

            <!-- Nareg -->
            <div class="main-div">
                <div class="main-button">
                    <h1>Nareg Tekelian</h1>
                    <button class="butt" id="edward-3">▼</button>
                </div>
                <div class="nigger" id="balls-3">
                    <img src="nareg.jpg" alt="Nareg Tekelian">
                    <p>Weirdly funny.</p>
                </div>
            </div>
            <div class="main-div">
                <div class="main-button">
                    <h1>Elena Hovaguimian</h1>
                    <button class="butt" id="edward-8">▼</button>
                </div>
                <div class="nigger" id="balls-8">
                    <img src="elena.jpg" alt="Elena Hovaguimian">
                    <p>Abe es m</p>
                </div>
            </div>       
            <div class="main-div">
                <div class="main-button">
                    <h1>Valerie Stephane</h1>
                    <button class="butt" id="edward-7">▼</button>
                </div>
                <div class="nigger" id="balls-7">
                    <img src="valerie.jpg" alt="Valerie Stephane">
                    <p>"I'm so glad I met you guyyyssssss... where's my takiithhhh?".</p>
                </div>
            </div>
            <!-- Manuel -->
            <div class="main-div">
                <div class="main-button">
                    <h1>Manuel Hagopian</h1>
                    <button class="butt" id="edward-4">▼</button>
                </div>
                <div class="nigger" id="balls-4">
                    <img src="mano.jpg" alt="Manuel Hagopian">
                    <p>GOAT.</p>
                </div>
            </div>

            <!-- David -->
            <div class="main-div">
                <div class="main-button">
                    <h1>David Khatchadourian</h1>
                    <button class="butt" id="edward-5">▼</button>
                </div>
                <div class="nigger" id="balls-5">
                    <img src="david.jpg" alt="David Khatchadourian">
                    <p>Kilis' new toy.</p>
                </div>
            </div>
            <div class="main-div">
                <div class="main-button">
                    <h1>Giovanni Meguerdichian</h1>
                    <button class="butt" id="edward-6">▼</button>
                </div>
                <div class="nigger" id="balls-6">
                    <img src="giovanni.jpg" alt="Giovanni Meguerdichian">
                    <p>"Tantig Hajiiiiissssssss".</p>
                </div>
            </div>
        </div>
`;

const texx = `
            <h1 class="introduction">Rules</h1>
            <br>
            <div class="niggers" id="falan">
                <div>
                    <h2>Rule 1:</h2>
                    <h3>Respect kilis' house at all time.</h3>
                </div>
                <div>
                    <h2>Rule 2:</h2>
                    <h3>Always say "aatik el aafie" to the officers at the entrance of the building.</h3>
                </div>
                <div>
                    <h2>Rule 3:</h2>
                    <h3>Always eat (wings, mcdo, noodles, each other).</h3>
                </div>
                <div>
                    <h2>Rule 4:</h2>
                    <h3>Be the wingman at any possible situation.</h3>
                </div>
                <div>
                    <h2>Rule 5:</h2>
                    <h3>Like each other posts.</h3>
                </div>
            </div>
`;

// Trim whitespaces to prevent innerHTML string matching glitches
const cleanTexx = texx.trim();
const cleanFar = far.trim();

var tt = document.getElementById("atr");
const bat = document.getElementById("kakgerr");

// Handle page switching and button text swap
bat.addEventListener("click", function() {
    if (tt.innerHTML.trim() === cleanTexx) {
        tt.innerHTML = cleanFar;
        bat.textContent = "Back"; // Updates button text dynamically
    } else {
        tt.innerHTML = cleanTexx;
        bat.textContent = "Next";
    }
});

// Event Delegation: Watches for clicks on the entire document
document.addEventListener('click', function(event) {
    // Check if the clicked item is a profile dropdown button
    if (event.target && event.target.classList.contains('butt')) {
        // Extract the unique number ID from edward-X
        const idNumber = event.target.id.replace('edward-', '');
        const menuContainer = document.getElementById(`balls-${idNumber}`);
        
        if (menuContainer) {
            menuContainer.classList.toggle('show');
            
            // Optional: Rotates arrow icon when open
            if (menuContainer.classList.contains('show')) {
                event.target.textContent = "▲";
            } else {
                event.target.textContent = "▼";
            }
        }
    }
});
