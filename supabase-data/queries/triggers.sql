create trigger add_request_data_on_post_insert after insert on posts
for each row
execute function insert_the_request();


create trigger add_request_data_on_comment_insert after insert on comments
for each row
execute function insert_the_request();

