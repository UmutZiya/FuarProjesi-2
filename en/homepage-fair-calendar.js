/*============== Fuar Takvim Js ================*/
// Sample event data
const events = [
  {
    id: 1,
    title: "JUNIOSHOW Bursa International Baby, Children's Clothing and Children's Needs Fair",
    date: "20 - 22 January ",
    year: "2026",
    month: "January",
    sector: "Textile",
    location: "Bursa",
    organizer: "KFA Fuarcılık A.Ş",
    url: "",
  },
  {
    id: 2,
    title: "MEEXX MACHINERY AND TECHNOLOGY FAIR 2025",
    date: "3 - 6 December 2025",
    year: "2025",
    month: "December",
    sector: "Machinery",
    location: "Bursa",
    organizer: "KFA Fuarcılık A.Ş",
    url: "./meex-fair-single-page.html",
  },
  {
    id: 3,
    title: "RISING CITY & BUILDING AND LIFE FAIR",
    date: "24 - 27 April 2026",
    year: "2026",
    month: "April",
    sector: "Building",
    location: "Bursa",
    organizer: "KFA Fuarcılık A.Ş",
    url: "./fuar-single-page.html",
  },
  {
    id: 4,
    title: "Food Point Food Products and Technologies Fair",
    date: "23 - 25 October 2025",
    year: "2025",
    month: "October",
    sector: "Food",
    location: "Bursa",
    organizer: "KFA Fuarcılık A.Ş",
    url: "./food-point-en.html",
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