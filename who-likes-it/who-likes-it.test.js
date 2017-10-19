let likes = require('./who-likes-it.js');

describe("Who likes this?", () => {
  it("Array of names empty should return 'no one like this'", () => {
    expect(likes([])).toBe("no one likes this");
  })

  it ("Array of names with one name should return 'James like this'", () => {
    expect(likes(['James'])).toBe("James likes this")
  })

  it ("Array of names with two names should return '<name_1> and <name_2> like this'", () => {
    expect(likes(['James', 'Sussy'])).toBe("James and Sussy like this");
  })

  it ("Array of names with three names should return '<name_1>, <name_2> and <name_3> like this'", () => {
    expect(likes(['Jacob', 'Morgan', 'Sally'])).toBe("Jacob, Morgan and Sally like this");
  })

  it ("Array of names with four names or more should return '<name_1>, <name_2> and <name.length-2> others like this'", () => {
    expect(likes(['James', 'Jesse', 'Petter', 'Marina'])).toBe("James, Jesse and 2 others like this");
  })
})
