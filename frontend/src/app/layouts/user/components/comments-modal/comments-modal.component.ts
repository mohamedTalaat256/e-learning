import { Component, Inject } from '@angular/core';
import { PostComment } from 'src/app/model/post_comment,model';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { postCommentsDummyList } from 'src/app/data/comments';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.scss']
})
export class CommentsModalComponent {

  comments: PostComment[] = postCommentsDummyList;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: object) {}

  
}
