const vlogs = [
    {
        id: 1,
        title: "India",
        description: "India, officially the Republic of India, is a country in South Asia. ",
        thumbnail: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png",
        link: "https://en.wikipedia.org/wiki/India"  // Example link for detailed view
    },
    {
        id: 2,
        title: "Mountain",
        description: "A mountain is a large landform that rises prominently above its surrounding environment.",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1280px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
        link: "https://en.wikipedia.org/wiki/Mountain"  // Example link for detailed view
    },
    {
        id: 3,
        title: "ChatGPT  ",
        description: "ChatGPT is a generative artificial intelligence chatbot developed by OpenAI and launched in 2022. ",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/1024px-ChatGPT-Logo.svg.png",
        link: "https://en.wikipedia.org/wiki/ChatGPT"  // Example link for detailed view
    },
    {
        id: 4,
        title: "Bihar",
        description: "Bihar is a state in Eastern India. It is the third largest state by population, the 12th largest by area, and the 15th largest by GDP in 2021.",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Golghar_patna.jpg/1920px-Golghar_patna.jpg",
        link: "https://en.wikipedia.org/wiki/Bihar"  // Add a real link here for details
    },
    {
        id: 5,
        title: "Mumbai",
        description: "Mumbai is the capital city of the Indian state of Maharashtra. ",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Bandra_Worli_Sea-Link_%28cropped%29.jpg/1920px-Bandra_Worli_Sea-Link_%28cropped%29.jpg",
        link: "https://en.wikipedia.org/wiki/Mumbai"  // Add a real link here for details
    },
];

// Function to load vlogs dynamically
function loadVlogs() {
    const vlogList = document.getElementById('vlog-list');
    vlogList.innerHTML = "";

    vlogs.forEach(vlog => {
        const vlogItem = document.createElement('div');
        vlogItem.className = "vlog-item";
        
        vlogItem.innerHTML = `
            <a href="${vlog.link}" target="_blank" class="vlog-link">
                <div class="vlog-thumbnail">
                    <img src="${vlog.thumbnail}" alt="${vlog.title}">
                </div>
                <div class="vlog-content">
                    <h2>${vlog.title}</h2>
                    <p>${vlog.description}</p>
                </div>
            </a>
        `;

        vlogList.appendChild(vlogItem);
    });
}

// Function to filter vlogs by title
function filterVlogs() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredVlogs = vlogs.filter(vlog =>
        vlog.title.toLowerCase().includes(searchInput)
    );

    // Update the DOM with filtered vlogs
    const vlogList = document.getElementById('vlog-list');
    vlogList.innerHTML = "";

    filteredVlogs.forEach(vlog => {
        const vlogItem = document.createElement('div');
        vlogItem.className = "vlog-item";

        vlogItem.innerHTML = `
            <a href="${vlog.link}" target="_blank" class="vlog-link">
                <div class="vlog-thumbnail">
                    <img src="${vlog.thumbnail}" alt="${vlog.title}">
                </div>
                <div class="vlog-content">
                    <h2>${vlog.title}</h2>
                    <p>${vlog.description}</p>
                </div>
            </a>
        `;

        vlogList.appendChild(vlogItem);
    });
}

// Initial load of vlogs
document.addEventListener('DOMContentLoaded', loadVlogs);

// Optionally, you can load from an API, but for now, the data is hardcoded above
// fetch('https://example.com/api/vlogs')
//     .then(response => response.json())
//     .then(data => loadVlogs(data));
