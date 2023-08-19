CREATE POLICY "Allow to get countries" ON "public"."countries"
AS PERMISSIVE FOR SELECT
TO anon
USING (get_header('origin') = get_running_origin());


CREATE POLICY "Allow to get categories" ON "public"."categories"
AS PERMISSIVE FOR select
TO anon
USING (get_header('origin') = get_running_origin());


CREATE POLICY "Allow users to Insert posts" ON "public"."posts"
AS PERMISSIVE FOR INSERT
To anon
WITH CHECK ((get_user_requests_count() < 8) AND (get_header('origin') = get_running_origin()));


CREATE POLICY "Allow users to select posts" ON "public"."posts"
AS PERMISSIVE FOR SELECT
To anon
USING (get_header('origin') = get_running_origin());


CREATE POLICY "Allow users to select comments" ON "public"."comments"
AS PERMISSIVE FOR select
To anon
USING (get_header('origin') = get_running_origin());


CREATE POLICY "Allow users to insert comments" ON "public"."comments"
AS PERMISSIVE FOR INSERT
To anon
WITH CHECK ((get_user_requests_count() < 15) AND (get_header('origin') = get_running_origin()));


CREATE POLICY "Allow admin to do all" ON "public"."user_requests"
AS PERMISSIVE FOR INSERT
TO anon
WITH CHECK (true)
