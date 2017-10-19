let likes = require('./who-likes-it.js');

describe("Who likes this?", () => {
  it("Array names empty should be 'no one like this'", () => {
    expect(likes([])).toBe("no one likes this");
  })

  it ("Array names with one name should be return 'James like this'", () => {
    expect(likes(['James'])).toBe("James likes this")
  })

  it ("Array names contain two names should be return '<name_1> and <name_2> like this'", () => {
    expect(likes(['James', 'Sussy'])).toBe("James and Sussy like this");
  })

  it ("Array names contain three names should be return '<name_1>, <name_2> and <name_3> like this'", () => {
    expect(likes(['Jacob', 'Morgan', 'Sally'])).toBe("Jacob, Morgan and Sally like this");
  })

  it ("Array names contain more of four names return '<name_1>, <name_2> and <name.length-2> others like this'", () => {
    expect(likes(['James', 'Jesse', 'Petter', 'Marina'])).toBe("James, Jesse and 2 others like this");
  })
})
