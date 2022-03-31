class FetchRequests {
  constructor ( html )


  getRequest = async (html) => {
    try {
      const response = await fetch(`${html}`)
      if (!response) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json
      return body
    } catch (error) {
      return console.error(`Error in fetch: (${error.message})`)
    }
  }

}