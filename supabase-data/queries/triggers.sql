drop trigger add_request_data_on_post_insert on posts;
create trigger add_request_data_on_post_insert after insert on posts
for each row
execute function insert_the_request();

drop trigger add_request_data_on_comment_insert on comments;
create trigger add_request_data_on_comment_insert after insert on comments
for each row
execute function insert_the_request();

