<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabula BP - The Future of Debate Tabulation</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Chosen Palette: Calm Harmony -->
    <!-- Application Structure Plan: The SPA is designed as a promotional and explanatory single-page website to showcase the features of a proposed debate tabulation application. The structure prioritizes user understanding and engagement over mirroring a functional app's layout. It flows from a general introduction (Hero) to a detailed exploration of features (Tabs), then role-specific benefits (Filters), a hands-on 'Live Demo' to simulate core functionality, a visual display of 'Analytics', and finally 'Technical Specs'. This top-down, interactive funnel is designed to guide a potential user (like a tournament organizer) from 'what is it?' to 'how does it work?' and 'why is it good for me?', making a complex feature list digestible and compelling. -->
    <!-- Visualization & Content Choices: 
        - Report Info: Full feature list -> Goal: Organize & Inform -> Viz/Method: Interactive Tabbed Interface -> Interaction: Click to reveal feature details -> Justification: Breaks down dense text into manageable, thematic sections (Setup, Draw, Results), preventing information overload.
        - Report Info: User Roles -> Goal: Compare & Personalize -> Viz/Method: Button-based Filtering -> Interaction: Click to show/hide features relevant to a specific role -> Justification: Allows different users (Admins, Debaters) to quickly see the value proposition for them.
        - Report Info: Results Entry & Real-time Standings -> Goal: Demonstrate & Engage -> Viz/Method: Mock HTML table, JS-powered modal, and a Chart.js Bar Chart -> Interaction: User clicks to enter mock scores in a modal, which dynamically updates the main standings table and re-renders the bar chart -> Justification: This creates a "wow" factor by simulating the app's most critical real-time feature in a tangible way.
        - Report Info: Reporting & Analytics -> Goal: Inform & Impress -> Viz/Method: Static but visually appealing Chart.js Pie and Line charts -> Interaction: Hover tooltips -> Justification: Visually communicates the potential for data analysis without requiring a backend or real data.
        - Report Info: Technical Features -> Goal: Inform & Build Trust -> Viz/Method: HTML/Tailwind Grid with Unicode icons -> Interaction: None -> Justification: A clean, modern, and easily scannable format for technical specifications.
    -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
    <style>
        body { font-family: 'Inter', sans-serif; }
        .chart-container { position: relative; width: 100%; max-width: 800px; margin-left: auto; margin-right: auto; height: 350px; max-height: 45vh; }
        @media (min-width: 768px) { .chart-container { height: 400px; } }
        .tab-active { border-bottom-color: #4f46e5; color: #4f46e5; }
        .tab-inactive { border-bottom-color: transparent; color: #6b7280; }
        .role-btn-active { background-color: #4f46e5; color: white; }
        .role-btn-inactive { background-color: #e5e7eb; color: #374151; }
    </style>
</head>
<body class="bg-slate-50 text-slate-800">

    <div id="app">
        <header class="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
            <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 class="text-2xl font-bold text-indigo-600">Tabula BP</h1>
                <ul class="hidden md:flex items-center space-x-8 font-medium text-slate-600">
                    <li><a href="#features" class="hover:text-indigo-600 transition-colors">Features</a></li>
                    <li><a href="#demo" class="hover:text-indigo-600 transition-colors">Live Demo</a></li>
                    <li><a href="#analytics" class="hover:text-indigo-600 transition-colors">Analytics</a></li>
                    <li><a href="#roles" class="hover:text-indigo-600 transition-colors">User Roles</a></li>
                </ul>
                <a href="#demo" class="hidden md:block bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-transform hover:scale-105">Try Demo</a>
            </nav>
        </header>

        <main class="container mx-auto px-6 py-12 md:py-20">
            
            <section class="text-center mb-20">
                <h2 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">The Ultimate Debate Tabulation Platform</h2>
                <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">Seamlessly manage your parliamentary debate tournaments from registration to final results with a powerful, intuitive, and real-time tabulation system.</p>
            </section>

            <section id="features" class="mb-20">
                <div class="text-center mb-12">
                    <h3 class="text-3xl font-bold mb-2">A Feature for Every Need</h3>
                    <p class="text-slate-600">Explore the core components that make Tabula BP so powerful.</p>
                </div>

                <div class="bg-white p-4 sm:p-8 rounded-xl shadow-lg">
                    <div class="mb-6 border-b border-slate-200">
                        <nav id="feature-tabs" class="flex flex-wrap -mb-px" aria-label="Tabs">
                            <button class="tab-btn tab-active text-sm sm:text-base font-semibold p-4 border-b-2" data-tab="setup">Tournament Setup</button>
                            <button class="tab-btn tab-inactive text-sm sm:text-base font-semibold p-4 border-b-2" data-tab="draw">Draw Generation</button>
                            <button class="tab-btn tab-inactive text-sm sm:text-base font-semibold p-4 border-b-2" data-tab="results">Results & Tabulation</button>
                            <button class="tab-btn tab-inactive text-sm sm:text-base font-semibold p-4 border-b-2" data-tab="finals">Breaking & Finals</button>
                        </nav>
                    </div>
                    
                    <div id="feature-content" class="min-h-[250px]">
                        <div class="tab-content" data-tab-content="setup">
                            <h4 class="text-xl font-semibold mb-3">Flexible Tournament Configuration</h4>
                            <p class="text-slate-600 mb-4">Set up your tournament exactly how you want it. Define formats (BP, AP), number of rounds, scoring systems, and custom tie-breaking rules. Easily manage teams, debaters, adjudicators, and institutions with robust conflict detection to ensure fairness.</p>
                            <ul class="list-disc list-inside space-y-2 text-slate-700">
                                <li>Configure speaker point ranges and win/loss points.</li>
                                <li>Register teams and adjudicators with conflict information (e.g., institution).</li>
                                <li>Set adjudicator strengths (Trainee, Provisional, Accredited) for balanced panels.</li>
                            </ul>
                        </div>
                        <div class="tab-content hidden" data-tab-content="draw">
                            <h4 class="text-xl font-semibold mb-3">Smart & Manual Draw Management</h4>
                            <p class="text-slate-600 mb-4">Generate fair and balanced draws automatically with our powerful algorithm. It supports power-pairing, avoids rematches, and respects conflicts. Need to make a change? The intuitive drag-and-drop interface allows for manual adjustments with real-time conflict warnings.</p>
                            <ul class="list-disc list-inside space-y-2 text-slate-700">
                                <li>Automated adjudicator allocation based on strength and conflicts.</li>
                                <li>Manual override for all assignments: teams, rooms, and judges.</li>
                                <li>Publish draws with a single click, with real-time updates for all participants.</li>
                            </ul>
                        </div>
                        <div class="tab-content hidden" data-tab-content="results">
                            <h4 class="text-xl font-semibold mb-3">Real-time Results & Standings</h4>
                            <p class="text-slate-600 mb-4">Enter results through a clean, user-friendly interface with built-in validation. As soon as results are entered, team and speaker standings update automatically across the entire platform. No more manual calculations or delays.</p>
                             <ul class="list-disc list-inside space-y-2 text-slate-700">
                                <li>Enter team ranks and individual speaker points for BP or AP formats.</li>
                                <li>Automatic calculation of team points and speaker totals.</li>
                                <li>Full audit trail to track who entered or modified results and when.</li>
                            </ul>
                        </div>
                         <div class="tab-content hidden" data-tab-content="finals">
                            <h4 class="text-xl font-semibold mb-3">Effortless Breaking & Finals Rounds</h4>
                            <p class="text-slate-600 mb-4">Determine your breaking teams and speakers automatically based on your pre-configured tie-breaking rules. Generate draws for elimination rounds with proper seeding, and manage finals results with a dedicated interface.</p>
                             <ul class="list-disc list-inside space-y-2 text-slate-700">
                                <li>Automated calculation of the break with manual adjustment capabilities.</li>
                                <li>Generate draws for Semi-Finals, Grand-Finals, and other out-rounds.</li>
                                <li>Clear presentation of final tournament results and top speakers.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="demo" class="mb-20">
                <div class="text-center mb-12">
                    <h3 class="text-3xl font-bold mb-2">Interactive Demo: Live Tabulation</h3>
                    <p class="text-slate-600 max-w-3xl mx-auto">Experience the power of real-time tabulation. Enter the results for a debate in Round 3 and watch the team standings and chart update instantly.</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div class="bg-white p-6 rounded-xl shadow-lg">
                        <h4 class="text-xl font-semibold mb-4">Round 3 Draw</h4>
                        <div id="draw-table-container" class="overflow-x-auto">
                            <table class="w-full text-left text-sm">
                                <thead class="bg-slate-100 text-slate-600">
                                    <tr>
                                        <th class="p-3">Room</th>
                                        <th class="p-3">Opening Gov</th>
                                        <th class="p-3">Opening Opp</th>
                                        <th class="p-3">Closing Gov</th>
                                        <th class="p-3">Closing Opp</th>
                                        <th class="p-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-slate-200">
                                        <td class="p-3 font-medium">Room 101</td>
                                        <td class="p-3">Team Alpha</td>
                                        <td class="p-3">Team Beta</td>
                                        <td class="p-3">Team Gamma</td>
                                        <td class="p-3">Team Delta</td>
                                        <td class="p-3"><button data-room="101" class="enter-results-btn bg-indigo-100 text-indigo-700 font-semibold px-3 py-1 text-xs rounded-full hover:bg-indigo-200">Enter Results</button></td>
                                    </tr>
                                    <tr class="border-b border-slate-200">
                                        <td class="p-3 font-medium">Room 102</td>
                                        <td class="p-3">Team Epsilon</td>
                                        <td class="p-3">Team Zeta</td>
                                        <td class="p-3">Team Eta</td>
                                        <td class="p-3">Team Theta</td>
                                        <td class="p-3"><button data-room="102" class="enter-results-btn bg-indigo-100 text-indigo-700 font-semibold px-3 py-1 text-xs rounded-full hover:bg-indigo-200">Enter Results</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-xl shadow-lg">
                        <h4 class="text-xl font-semibold mb-4">Live Team Standings</h4>
                         <div id="standings-table-container" class="overflow-x-auto">
                            <table class="w-full text-left text-sm">
                                <thead class="bg-slate-100 text-slate-600">
                                    <tr>
                                        <th class="p-3">Rank</th>
                                        <th class="p-3">Team</th>
                                        <th class="p-3">Points</th>
                                        <th class="p-3">Speaker Pts</th>
                                    </tr>
                                </thead>
                                <tbody id="team-standings-body">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-lg mt-8">
                    <h4 class="text-xl font-semibold mb-4 text-center">Top Teams by Points</h4>
                    <div class="chart-container">
                        <canvas id="teamStandingsChart"></canvas>
                    </div>
                </div>
            </section>
            
            <section id="analytics" class="mb-20">
                <div class="text-center mb-12">
                    <h3 class="text-3xl font-bold mb-2">Powerful Reporting & Analytics</h3>
                    <p class="text-slate-600">Go beyond simple standings. Visualize tournament data to gain insights into performance and trends.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 rounded-xl shadow-lg">
                        <h4 class="text-xl font-semibold mb-4 text-center">Debate Outcomes by Position</h4>
                        <div class="chart-container" style="max-height: 350px;">
                            <canvas id="outcomesChart"></canvas>
                        </div>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-lg">
                        <h4 class="text-xl font-semibold mb-4 text-center">Average Speaker Points Per Round</h4>
                        <div class="chart-container" style="max-height: 350px;">
                            <canvas id="speakerPointsChart"></canvas>
                        </div>
                    </div>
                </div>
            </section>

            <section id="roles" class="mb-20">
                 <div class="text-center mb-12">
                    <h3 class="text-3xl font-bold mb-2">A Tailored Experience for Everyone</h3>
                    <p class="text-slate-600">Select a role to see the features designed specifically for you.</p>
                </div>
                <div class="flex justify-center flex-wrap gap-2 mb-8">
                    <button class="role-btn role-btn-active text-sm sm:text-base font-semibold py-2 px-4 rounded-lg" data-role="all">All Roles</button>
                    <button class="role-btn role-btn-inactive text-sm sm:text-base font-semibold py-2 px-4 rounded-lg" data-role="ca">Admin / CA</button>
                    <button class="role-btn role-btn-inactive text-sm sm:text-base font-semibold py-2 px-4 rounded-lg" data-role="adj">Adjudicator</button>
                    <button class="role-btn role-btn-inactive text-sm sm:text-base font-semibold py-2 px-4 rounded-lg" data-role="deb">Debater</button>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
                    <ul id="role-features-list" class="space-y-3">
                        <li data-role-feature="ca" class="flex items-start"><span class="bg-indigo-100 text-indigo-600 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">CA</span><div><span class="font-semibold">Full Control:</span> Manage tournament setup, draws, results, and users.</div></li>
                        <li data-role-feature="ca" class="flex items-start"><span class="bg-indigo-100 text-indigo-600 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">CA</span><div><span class="font-semibold">Manual Overrides:</span> Adjust any automated assignment with conflict warnings.</div></li>
                        <li data-role-feature="adj" class="flex items-start"><span class="bg-green-100 text-green-600 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">ADJ</span><div><span class="font-semibold">View Assignments:</span> Easily see your assigned debates and panels for each round.</div></li>
                        <li data-role-feature="adj" class="flex items-start"><span class="bg-green-100 text-green-600 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">ADJ</span><div><span class="font-semibold">Direct Score Entry:</span> Submit scores directly from your device (if enabled).</div></li>
                        <li data-role-feature="deb" class="flex items-start"><span class="bg-sky-100 text-sky-600 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">DEB</span><div><span class="font-semibold">Live Schedule:</span> View your team's schedule, rooms, and opponents.</div></li>
                        <li data-role-feature="deb" class="flex items-start"><span class="bg-sky-100 text-sky-600 font-bold text-xs rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">DEB</span><div><span class="font-semibold">Track Performance:</span> See your team's results and individual speaker scores after they are released.</div></li>
                    </ul>
                </div>
            </section>

             <section id="tech-specs" class="text-center">
                <h3 class="text-3xl font-bold mb-8">Secure, Scalable, and Reliable</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    <div class="bg-white p-6 rounded-xl shadow-lg">
                        <div class="text-4xl mb-3 text-indigo-500">☁️</div>
                        <h4 class="font-semibold text-lg">Cloud-Based</h4>
                        <p class="text-slate-600 text-sm">Access from anywhere, on any device with an internet connection.</p>
                    </div>
                     <div class="bg-white p-6 rounded-xl shadow-lg">
                        <div class="text-4xl mb-3 text-indigo-500">🔒</div>
                        <h4 class="font-semibold text-lg">Data Security</h4>
                        <p class="text-slate-600 text-sm">Encryption and regular backups to keep your tournament data safe.</p>
                    </div>
                     <div class="bg-white p-6 rounded-xl shadow-lg">
                        <div class="text-4xl mb-3 text-indigo-500">🚀</div>
                        <h4 class="font-semibold text-lg">Highly Scalable</h4>
                        <p class="text-slate-600 text-sm">Built to handle tournaments of any size, from local to international.</p>
                    </div>
                     <div class="bg-white p-6 rounded-xl shadow-lg">
                        <div class="text-4xl mb-3 text-indigo-500">📱</div>
                        <h4 class="font-semibold text-lg">Responsive Design</h4>
                        <p class="text-slate-600 text-sm">A great experience whether you're on a phone, tablet, or desktop.</p>
                    </div>
                </div>
            </section>
        </main>
        
        <footer class="bg-slate-800 text-slate-300 mt-20">
            <div class="container mx-auto px-6 py-8 text-center">
                <p>&copy; 2025 Tabula BP. Revolutionizing debate tabulation.</p>
            </div>
        </footer>
    </div>
    
    <div id="results-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 hidden">
        <div class="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg">
            <h3 class="text-2xl font-bold mb-6">Enter Results for <span id="modal-room-id"></span></h3>
            <form id="results-form">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="font-semibold text-slate-600">Team Alpha (OG)</label>
                        <input type="number" placeholder="Rank (1-4)" class="rank-input w-full p-2 border border-slate-300 rounded-md mt-1" min="1" max="4" required>
                    </div>
                    <div>
                        <label class="font-semibold text-slate-600">Team Beta (OO)</label>
                        <input type="number" placeholder="Rank (1-4)" class="rank-input w-full p-2 border border-slate-300 rounded-md mt-1" min="1" max="4" required>
                    </div>
                    <div>
                        <label class="font-semibold text-slate-600">Team Gamma (CG)</label>
                        <input type="number" placeholder="Rank (1-4)" class="rank-input w-full p-2 border border-slate-300 rounded-md mt-1" min="1" max="4" required>
                    </div>
                    <div>
                        <label class="font-semibold text-slate-600">Team Delta (CD)</label>
                        <input type="number" placeholder="Rank (1-4)" class="rank-input w-full p-2 border border-slate-300 rounded-md mt-1" min="1" max="4" required>
                    </div>
                </div>
                <div id="modal-error" class="text-red-600 text-sm mt-4 hidden"></div>
                <div class="mt-8 flex justify-end gap-4">
                    <button type="button" id="cancel-btn" class="bg-slate-200 text-slate-800 font-semibold px-6 py-2 rounded-lg hover:bg-slate-300">Cancel</button>
                    <button type="submit" class="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-700">Submit Results</button>
                </div>
            </form>
        </div>
    </div>


<script>
document.addEventListener('DOMContentLoaded', () => {

    const appState = {
        teams: [
            { id: 'alpha', name: 'Team Alpha', points: 4, speakerPoints: 305 },
            { id: 'beta', name: 'Team Beta', points: 3, speakerPoints: 302 },
            { id: 'gamma', name: 'Team Gamma', points: 2, speakerPoints: 299 },
            { id: 'delta', name: 'Team Delta', points: 1, speakerPoints: 295 },
            { id: 'epsilon', name: 'Team Epsilon', points: 5, speakerPoints: 310 },
            { id: 'zeta', name: 'Team Zeta', points: 6, speakerPoints: 315 },
            { id: 'eta', name: 'Team Eta', points: 0, speakerPoints: 280 },
            { id: 'theta', name: 'Team Theta', points: 4, speakerPoints: 308 },
        ],
        resultsSubmitted: new Set(),
    };

    let teamStandingsChartInstance;

    function renderStandings() {
        const sortedTeams = [...appState.teams].sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            return b.speakerPoints - a.speakerPoints;
        });

        const standingsBody = document.getElementById('team-standings-body');
        standingsBody.innerHTML = '';
        sortedTeams.forEach((team, index) => {
            const row = document.createElement('tr');
            row.className = 'border-b border-slate-200';
            row.innerHTML = `
                <td class="p-3 font-medium">${index + 1}</td>
                <td class="p-3">${team.name}</td>
                <td class="p-3">${team.points}</td>
                <td class="p-3">${team.speakerPoints}</td>
            `;
            standingsBody.appendChild(row);
        });

        updateTeamStandingsChart(sortedTeams.slice(0, 5));
    }

    function updateTeamStandingsChart(topTeams) {
        const ctx = document.getElementById('teamStandingsChart').getContext('2d');
        const labels = topTeams.map(t => t.name);
        const data = topTeams.map(t => t.points);

        if (teamStandingsChartInstance) {
            teamStandingsChartInstance.data.labels = labels;
            teamStandingsChartInstance.data.datasets[0].data = data;
            teamStandingsChartInstance.update();
        } else {
            teamStandingsChartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Team Points',
                        data: data,
                        backgroundColor: 'rgba(79, 70, 229, 0.8)',
                        borderColor: 'rgba(79, 70, 229, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: { y: { beginAtZero: true, suggestedMax: 8 } },
                    plugins: { legend: { display: false } }
                }
            });
        }
    }

    const featureTabs = document.getElementById('feature-tabs');
    featureTabs.addEventListener('click', (e) => {
        if (e.target.matches('.tab-btn')) {
            const selectedTab = e.target.dataset.tab;
            
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('tab-active');
                btn.classList.add('tab-inactive');
            });
            e.target.classList.add('tab-active');
            e.target.classList.remove('tab-inactive');
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.toggle('hidden', content.dataset.tabContent !== selectedTab);
            });
        }
    });
    
    const roleButtons = document.querySelectorAll('.role-btn');
    roleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedRole = button.dataset.role;

            roleButtons.forEach(btn => {
                btn.classList.remove('role-btn-active');
                btn.classList.add('role-btn-inactive');
            });
            button.classList.add('role-btn-active');
            button.classList.remove('role-btn-inactive');

            const features = document.querySelectorAll('#role-features-list li');
            features.forEach(feature => {
                if (selectedRole === 'all' || feature.dataset.roleFeature === selectedRole) {
                    feature.style.display = 'flex';
                } else {
                    feature.style.display = 'none';
                }
            });
        });
    });

    const modal = document.getElementById('results-modal');
    const modalRoomId = document.getElementById('modal-room-id');
    const resultsForm = document.getElementById('results-form');
    const modalError = document.getElementById('modal-error');

    document.querySelectorAll('.enter-results-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const roomId = e.target.dataset.room;
            if (appState.resultsSubmitted.has(roomId)) {
                alert('Results for this room have already been submitted.');
                return;
            }
            modalRoomId.textContent = roomId;
            resultsForm.reset();
            modalError.classList.add('hidden');
            modal.classList.remove('hidden');
        });
    });

    document.getElementById('cancel-btn').addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    resultsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const ranks = Array.from(document.querySelectorAll('.rank-input')).map(input => parseInt(input.value));
        const rankSum = ranks.reduce((a, b) => a + b, 0);
        const uniqueRanks = new Set(ranks);

        if (ranks.some(isNaN) || rankSum !== 10 || uniqueRanks.size !== 4) {
            modalError.textContent = 'Please enter unique ranks from 1 to 4. The sum of ranks must be 10.';
            modalError.classList.remove('hidden');
            return;
        }

        const rankPoints = { 1: 3, 2: 2, 3: 1, 4: 0 };
        const teamsInDebate = ['alpha', 'beta', 'gamma', 'delta'];

        ranks.forEach((rank, index) => {
            const teamId = teamsInDebate[index];
            const team = appState.teams.find(t => t.id === teamId);
            team.points += rankPoints[rank];
            team.speakerPoints += (80 - (rank * 2)); 
        });

        const roomId = modalRoomId.textContent;
        appState.resultsSubmitted.add(roomId);
        const submittedBtn = document.querySelector(`.enter-results-btn[data-room="${roomId}"]`);
        submittedBtn.textContent = 'Submitted';
        submittedBtn.disabled = true;
        submittedBtn.classList.remove('bg-indigo-100', 'hover:bg-indigo-200', 'text-indigo-700');
        submittedBtn.classList.add('bg-green-100', 'text-green-700');

        modal.classList.add('hidden');
        renderStandings();
    });

    new Chart(document.getElementById('outcomesChart').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Opening Gov Wins', 'Opening Opp Wins', 'Closing Gov Wins', 'Closing Opp Wins'],
            datasets: [{
                data: [28, 26, 24, 22],
                backgroundColor: ['#a5b4fc', '#7dd3fc', '#6366f1', '#0ea5e9'],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } }
        }
    });

    new Chart(document.getElementById('speakerPointsChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5'],
            datasets: [{
                label: 'Average Speaker Points',
                data: [74.5, 75.1, 75.3, 75.8, 76.2],
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { suggestedMin: 73, suggestedMax: 77 } }
        }
    });

    renderStandings();
});
</script>
</body>
</html>
