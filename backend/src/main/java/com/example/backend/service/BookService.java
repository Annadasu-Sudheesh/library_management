package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Book;
import com.example.backend.repository.BookRespository;

@Service
public class BookService {

    @Autowired
    private BookRespository bookRepository;
    public Book addBook(Book book) {
        book.setAvailable(true);
        return bookRepository.save(book);
    }
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }
    public List<Book> getAvailableBooks() {
        return bookRepository.findByAvailable(true);
    }
    public List<Book> searchByTitle(String title) {
        return bookRepository.findByTitleContainingIgnoreCase(title);
    }

    public List<Book> searchByAuthor(String author) {
        return bookRepository.findByAuthorContainingIgnoreCase(author);
    }
    public Book getBookById(Long id) {
        return bookRepository.findById(id).orElse(null);
    }
    public Book updateBook(Book book) {
        return bookRepository.save(book);
    }
}