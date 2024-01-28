class MovieAPI {
    constructor() {
      this.movies = [];
    }

    // Create a new movie
    createMovie(title, genre, year) {
        const movie = {
            id: this.generateId(),
            title,
            genre,
            year,
        };
  
        this.movies.push(movie);
        return movie;
    }
  
    // Return all movies
    getAllMovies() {
        return this.movies;
    }
  
    // Return a specific movie
    getMovieById(id) {
        return this.movies.find(movie => movie.id === id);
    }
  
    // Update a movie by ID
    updateMovie(id, newData) {
        const index = this.movies.findIndex(movie => movie.id === id);

        if (index !== -1) {
            this.movies[index] = { ...this.movies[index], ...newData };
            return this.movies[index];
        }
    
        //If movie is not found
        return null;
    }
  
    // Delete a movie by ID
    deleteMovie(id) {
        const index = this.movies.findIndex(movie => movie.id === id);
    
        if (index !== -1) {
            const deletedMovie = this.movies.splice(index, 1);
            return deletedMovie[0];
        }
    
        //If movie is not found
        return null; 
    }
  
    // To generate a unique ID
    generateId() {
        let result = '';
        for (let i = 0; i < 36; i++) {
            result += Math.floor(Math.random() * 10);
        }
        return result;    
    }
}
  
// Example usage:
const movieApi = new MovieAPI();

const movie1 = movieApi.createMovie('Inception', 'Sci-Fi', 2010);
const movie2 = movieApi.createMovie('The Shawshank Redemption', 'Drama', 1994);

console.log(movieApi.getAllMovies());

const movieById = movieApi.getMovieById(movie1.id);
console.log(movieById);


const updatedMovie = movieApi.updateMovie(movie1.id, { genre: 'Sci-Fi/Thriller' });
console.log(updatedMovie);

const deletedMovie = movieApi.deleteMovie(movie2.id);

console.log(movieApi.getAllMovies());