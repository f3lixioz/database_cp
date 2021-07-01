# database_cp

All challenge results located ./results

Challenge 1: SELECT * FROM destinations;

Challenge 2: SELECT * FROM destinations; WHERE has_beaches = true;

Challenge 3: SELECT * FROM destinations WHERE average_temp > 60;

Challenge 4: SELECT * FROM destinations WHERE has_beaches = true AND has_mountains = true;

Challenge 5: SELECT * FROM destinations WHERE cost_of_flight < 500 AND has_mountains = true;

Challenge 6: INSERT INTO destinations (name, average_temp, has_beaches, has_mountains, cost_of_flight) VALUES ('Bahamas, 78, true, false, 345);

Challenge 7: UPDATE destinations SET cost_of_flight = 1000 WHERE name = 'New Zealand';

Challenge 8: DELETE FROM destinations WHERE name = 'Minnesota';

Challenge 9: UPDATE destinations SET name = 'Scotland' WHERE name = 'England';

Challenge 10: SELECT * FROM airlines;

Challenge 11: SELECT * FROM airlines WHERE 'New Zealand' = any(destinations_flown_to);

Challenge 12: SELECT * FROM airlines WHERE NOT 'Scotland' = any(destinations_flown_to);

Challenge 13: SELECT * FROM destinations;