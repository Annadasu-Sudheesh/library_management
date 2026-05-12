package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
	List<Book> findByAvailableTrue();
	List<Book> findByAvailableFalse();
	List<Book> findByTitleContainingIgnoreCase(String title);
	List<Book> findByAuthorContainingIgnoreCase(String author);
}