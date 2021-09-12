export { };

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = (item: any[]): string[] => {
  return item.map(e => e.title);
};

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
