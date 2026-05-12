package com.example.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Book;
import com.example.backend.model.IssuesRecord;
import com.example.backend.model.Member;

@Repository
public interface IssuesRecordRepository extends JpaRepository<IssuesRecord, Long> {
	List<IssuesRecord> findByMember(Member member);
	List<IssuesRecord> findByBook(Book book);
	List<IssuesRecord> findByMemberAndReturnDateIsNull(Member member);
	List<IssuesRecord> findByReturnDateIsNull();
	int countByMemberAndReturnDateIsNull(Member member);
}