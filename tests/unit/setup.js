import '@testing-library/jest-dom'

const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
})
window.IntersectionObserver = mockIntersectionObserver


// Mock for fetch function
require('jest-fetch-mock').enableMocks()