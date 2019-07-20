import expencesReducer from "./expensesReducer";

describe("[REDUCERS] expencesReducer", () => {
  let totalExpenses;

  beforeEach(() => {
    totalExpenses = [];
  });
  it("should be an instance of Function", () => {
    console.log(expencesReducer);
    expect(expencesReducer instanceof Function).toStrictEqual(true);
  });

  it("should return a default state", () => {
    expect(expencesReducer(totalExpenses, {})).toStrictEqual(totalExpenses);
  });

  it("should return initial state", () => {
    expect(expencesReducer(undefined, {})).toStrictEqual([]);
  });

  it("should return an updated state", () => {
    expect(
      expencesReducer(totalExpenses, { type: "ADD_EXPENSE", expense: {} })
    ).toStrictEqual([{}]);
  });
});
