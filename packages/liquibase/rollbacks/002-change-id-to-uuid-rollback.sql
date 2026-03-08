-- I take 0 responsibilty for whatever this shit gonna do, just don't run it, ever

ALTER TABLE restaurant.users
    ALTER COLUMN id DROP DEFAULT,
    ALTER COLUMN id SET DATA TYPE INTEGER USING (row_number() OVER ());

CREATE SEQUENCE restaurants_id_seq;
ALTER TABLE restaurants.users ALTER COLUMN id SET DEFAULT nextval('restaurants_id_seq');
ALTER SEQUENCE restaurants_id_seq OWNED BY restaurants.users.id;

SELECT setval('restaurants_id_seq', COALESCE(MAX(id), 0) + 1, false) FROM restaurants;