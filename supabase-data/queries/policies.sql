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
WITH CHECK (get_header('origin') = get_running_origin());


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
WITH CHECK (get_header('origin') = get_running_origin());


create policy "Allow insert from specific origin" ON storage.objects
FOR INSERT
TO anon
WITH CHECK ((bucket_id = 'post-files') AND (get_header('origin') = get_running_origin()));
