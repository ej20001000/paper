package com.ohgiraffers.mapping.section03.compositekey.subsection01.embeddedid;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class LikeBookService {

    private LikeRepository likeRepository;

    public LikeBookService(LikeRepository likeRepository) {
        this.likeRepository = likeRepository;
    }

    @Transactional
    public void generateLikeBook(LikeDTO likeinfo) {
        Like like = new Like(
                new LikeCompositeKey(
                        new LikedMemberNo(likeinfo.getLikedMemberNo()),
                        new LikedBookNo(likeinfo.getLinkedBookNo())
                )
        );
        likeRepository.save(like);
    }


}
