package com.devsuperior.dsmovie.services;


import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {
    
    @Autowired
    private MovieRepository repository;

    @Transactional(readOnly = true)
    public Page<MovieDTO> findAll(Pageable pageable){
    	Page <Movie> result = repository.findAll(pageable);
        Page <MovieDTO> allMovies = result.map(movie -> new MovieDTO(movie));
    	return allMovies;
    }

    @Transactional(readOnly = true)
    public MovieDTO findById(Long id){
        Movie res = repository.findById(id).get();
        MovieDTO movie = new MovieDTO(res);
        return movie;
    }

}
