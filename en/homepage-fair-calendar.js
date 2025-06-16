/*============== Fuar Takvim Js ================*/
// Sample event data
const events = [
  {
    id: 1,
    title: "IJS Istanbul Jewelry Show 2025 - 57th Istanbul International Jewelry, Watches and Materials Fair",
    date: "April 16 - 19",
    year: "2025",
    month: "April",
    sector: "Jewelry",
    location: "İstanbul",
    organizer: "UBM Istanbul Fair and Exhibition Services Inc.",
    url: "event-details.html?id=1",
  },
  {
    id: 2,
    title: "Mobilefest - Agora, Eurasia Technology Week",
    date: "April 17 - 19, 2025",
    year: "2025",
    month: "April",
    sector: "Technology",
    location: "Agora",
    organizer: "HİS Fair Services Ltd. Co.",
    url: "event-details.html?id=2",
  },
  {
    id: 3,
    title: "VIV SELECT Türkiye 2025 - 11th International Specialized Fair for Poultry and Technologies",
    date: "24 - 26 Nisan 2025",
    year: "2025",
    month: "April",
    sector: "poultry farming",
    location: "İstanbul",
    organizer: "HKF Fair Organization Inc.",
    url: "event-details.html?id=3",
  },
  {
    id: 4,
    title: "FOTEG Istanbul 2025 - Food Processing Technologies International Trade Fair",
    date: "April 24 - 26, 2025",
    year: "2025",
    month: "April",
    sector: "Food Processing",
    location: "İstanbul",
    organizer: "HKF Fair Organization Inc.",
    url: "event-details.html?id=4",
  },
  {
    id: 5,
    title: "Technology Fair 2025",
    date: "July 10 - 15, 2025",
    year: "2025",
    month: "July",
    sector: "Technology",
    location: "Ankara",
    organizer: "ABC Fair Organization Ltd. Sti.",
    url: "event-details.html?id=5",
  },
  {
    id: 6,
    title: "Food Festival 2026",
    date: "January 5 - 10, 2026",
    year: "2026",
    month: "Fireplace",
    sector: "Food Processing",
    location: "İstanbul",
    organizer: "XYZ Organization Inc.",
    url: "event-details.html?id=6",
  },
  {
    id: 7,
    title: "Construction Fair 2025",
    date: "May 15 - 20, 2025",
    year: "2025",
    month: "May",
    sector: "Building",
    location: "İstanbul",
    organizer: "DEF Fair Organization Inc.",
    url: "event-details.html?id=7",
  },
  {
    id: 8,
    title: "Automotive Fair 2025",
    date: "June 1 - 5, 2025",
    year: "2025",
    month: "June",
    sector: "Automotive",
    location: "İstanbul",
    organizer: "GHI Fair Organization Ltd. Sti.",
    url: "event-details.html?id=8",
  },
  {
    id: 9,
    title: "Tourism Fair 2025",
    date: "September 10 - 15, 2025",
    year: "2025",
    month: "September",
    sector: "Tourism",
    location: "Antalya",
    organizer: "JKL Organization Inc.",
    url: "event-details.html?id=9",
  },
  {
    id: 10,
    title: "Furniture Fair 2025",
    date: "October 20 - 25, 2025",
    year: "2025",
    month: "October",
    sector: "Furniture",
    location: "İstanbul",
    organizer: "MNO Fair Organization Inc.",
    url: "event-details.html?id=10",
  },

  {
    id: 11,
    title: "Construction and Real Estate Fair",
    date: "April 24 - 27, 2025",
    year: "2025",
    month: "April",
    sector: "Building",
    location: "Bursa",
    organizer: "Bursa Fair Center",
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
    eventsList.innerHTML = '<div class="alert alert-info">No events were found that match the selected criteria.</div>'
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