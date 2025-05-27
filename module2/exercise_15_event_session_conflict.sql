-- Exercise 15: Event Session Time Conflict
SELECT s1.event_id, s1.session_id AS session1_id, s2.session_id AS session2_id,
       s1.title AS session1_title, s2.title AS session2_title
FROM Sessions s1
JOIN Sessions s2 ON s1.event_id = s2.event_id AND s1.session_id < s2.session_id
WHERE s1.start_time < s2.end_time AND s2.start_time < s1.end_time;