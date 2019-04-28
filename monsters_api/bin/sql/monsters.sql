create table monsters (
  id serial,
  name character varying(50),
  personality character varying(50)
);

create table habitats (
  id serial,
  name character varying(50),
  climate character varying(50),
  temperature int
);

create table lives (
  monster character varying(50),
  habitat character varying(50)
);

insert into monsters(name, personality)
values
('Fluffy', 'aggressive'),
('Noodles', 'impatient'),
('Rusty', 'passionate');

insert into habitats(name, climate, temperature)
values
('desert', 'dry', 100),
('forrest', 'haunted', 70),
('mountain', 'icy', 30);

insert into lives(monster, habitat)
values
('Fluffy', 'dessert'),
('Noodles', 'forrest'),
('Rusty', 'mountain');
