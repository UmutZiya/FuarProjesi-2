/*============== Fuar Takvim Js ================*/
// Sample event data
const events = [
  {
    id: 1,
    title: "IJS İstanbul Jewelry Show 2025 - 57. İstanbul Uluslararası Mücevherat, Saat ve Malzemeleri Fuarı",
    date: "16 - 19 Nisan",
    year: "2025",
    month: "Nisan",
    sector: "Mücevherat",
    location: "İstanbul",
    organizer: "UBM İstanbul Fuarcılık ve Gösteri Hizmetleri A.Ş.",
    url: "event-details.html?id=1",
  },
  {
    id: 2,
    title: "Mobilefest - Agora, Avrasya Teknoloji Haftası",
    date: "17 - 19 Nisan 2025",
    year: "2025",
    month: "Nisan",
    sector: "Teknoloji",
    location: "Agora",
    organizer: "HİS Fuarcılık Hizmetleri Ltd. Şti.",
    url: "event-details.html?id=2",
  },
  {
    id: 3,
    title: "VIV SELECT TÜRKİYE 2025 - 11. Tavukçuluk ve Teknolojileri Uluslararası İhtisas Fuarı",
    date: "24 - 26 Nisan 2025",
    year: "2025",
    month: "Nisan",
    sector: "Tavukçuluk",
    location: "İstanbul",
    organizer: "HKF Fuarcılık A.Ş.",
    url: "event-details.html?id=3",
  },
  {
    id: 4,
    title: "FOTEG İstanbul 2025 - Gıda İşleme Teknolojileri Uluslararası İhtisas Fuarı",
    date: "24 - 26 Nisan 2025",
    year: "2025",
    month: "Nisan",
    sector: "Gıda İşleme",
    location: "İstanbul",
    organizer: "HKF Fuarcılık A.Ş.",
    url: "event-details.html?id=4",
  },
  {
    id: 5,
    title: "Teknoloji Fuarı 2025",
    date: "10 - 15 Temmuz 2025",
    year: "2025",
    month: "Temmuz",
    sector: "Teknoloji",
    location: "Ankara",
    organizer: "ABC Fuarcılık Ltd. Şti.",
    url: "event-details.html?id=5",
  },
  {
    id: 6,
    title: "Gıda Festivali 2026",
    date: "5 - 10 Ocak 2026",
    year: "2026",
    month: "Ocak",
    sector: "Gıda İşleme",
    location: "İstanbul",
    organizer: "XYZ Organizasyon A.Ş.",
    url: "event-details.html?id=6",
  },
  {
    id: 7,
    title: "Yapı Fuarı 2025",
    date: "15 - 20 Mayıs 2025",
    year: "2025",
    month: "Mayıs",
    sector: "İnşaat",
    location: "İstanbul",
    organizer: "DEF Fuarcılık A.Ş.",
    url: "event-details.html?id=7",
  },
  {
    id: 8,
    title: "Otomotiv Fuarı 2025",
    date: "1 - 5 Haziran 2025",
    year: "2025",
    month: "Haziran",
    sector: "Otomotiv",
    location: "İstanbul",
    organizer: "GHI Fuarcılık Ltd. Şti.",
    url: "event-details.html?id=8",
  },
  {
    id: 9,
    title: "Turizm Fuarı 2025",
    date: "10 - 15 Eylül 2025",
    year: "2025",
    month: "Eylül",
    sector: "Turizm",
    location: "Antalya",
    organizer: "JKL Organizasyon A.Ş.",
    url: "event-details.html?id=9",
  },
  {
    id: 10,
    title: "Mobilya Fuarı 2025",
    date: "20 - 25 Ekim 2025",
    year: "2025",
    month: "Ekim",
    sector: "Mobilya",
    location: "İstanbul",
    organizer: "MNO Fuarcılık A.Ş.",
    url: "event-details.html?id=10",
  },

  {
    id: 11,
    title: "İnşaat ve Gayrimenkul Fuarı",
    date: "24 - 27 Nisan 2025",
    year: "2025",
    month: "Nisan",
    sector: "İnşaat",
    location: "Bursa",
    organizer: "Bursa Fuar Merkezi",
    url: "./fuar-single-page.html",
  },
]
// DOM elements
const yearFilter = document.getElementById("yearFilter")
const monthFilter = document.getElementById("monthFilter")
const sectorFilter = document.getElementById("sectorFilter")
const locationFilter = document.getElementById("locationFilter")
const eventsList = document.getElementById("eventsList")
const paginationContainer = document.getElementById("pagination")

// Pagination variables
let currentPage = 1
const eventsPerPage = 6
let filteredEvents = events

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  updateEvents()

  // Add event listeners to filters
  yearFilter.addEventListener("change", () => {
    currentPage = 1 // Reset to first page when filter changes
    filterEvents()
  })
  monthFilter.addEventListener("change", () => {
    currentPage = 1
    filterEvents()
  })
  sectorFilter.addEventListener("change", () => {
    currentPage = 1
    filterEvents()
  })
  locationFilter.addEventListener("change", () => {
    currentPage = 1
    filterEvents()
  })
})

// Filter events based on selected criteria
function filterEvents() {
  const selectedYear = yearFilter.value
  const selectedMonth = monthFilter.value
  const selectedSector = sectorFilter.value
  const selectedLocation = locationFilter.value

  filteredEvents = events

  // Apply filters
  if (selectedYear) {
    filteredEvents = filteredEvents.filter((event) => event.year === selectedYear)
  }

  if (selectedMonth) {
    filteredEvents = filteredEvents.filter((event) => event.month === selectedMonth)
  }

  if (selectedSector) {
    filteredEvents = filteredEvents.filter((event) => event.sector === selectedSector)
  }

  if (selectedLocation) {
    filteredEvents = filteredEvents.filter((event) => event.location === selectedLocation)
  }

  // Update display with filtered events
  updateEvents()
}

// Update events display and pagination
function updateEvents() {
  displayEvents()
  setupPagination()
}

// Display events in the DOM
function displayEvents() {
  eventsList.innerHTML = ""

  if (filteredEvents.length === 0) {
    eventsList.innerHTML = '<div class="alert alert-info">Seçilen kriterlere uygun etkinlik bulunamadı.</div>'
    return
  }

  // Calculate pagination
  const startIndex = (currentPage - 1) * eventsPerPage
  const endIndex = Math.min(startIndex + eventsPerPage, filteredEvents.length)
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex)

  paginatedEvents.forEach((event) => {
    const eventElement = document.createElement("div")
    eventElement.className = "event-item"

    eventElement.innerHTML = `
            <a href="${event.url}" class="event-link">
                <div class="event-title">${event.title}</div>
                <div class="event-date">${event.date}</div>
                <div class="event-organizer">${event.organizer}</div>
            </a>
        `

    eventsList.appendChild(eventElement)
  })
}

// Setup pagination
function setupPagination() {
  paginationContainer.innerHTML = ""

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)

  if (totalPages <= 1) {
    return // Don't show pagination if there's only one page
  }

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li")
    pageItem.className = `page-item ${i === currentPage ? "active" : ""}`

    const pageLink = document.createElement("a")
    pageLink.className = "page-link"
    pageLink.href = "#"
    pageLink.textContent = i

    pageLink.addEventListener("click", (e) => {
      e.preventDefault()
      currentPage = i
      updateEvents()
    })

    pageItem.appendChild(pageLink)
    paginationContainer.appendChild(pageItem)
  }
}