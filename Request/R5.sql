SELECT COUNT(*)
FROM insurance_policy;

SELECT SUM(proposed_premium)
FROM quotation;

SELECT COUNT(*)
FROM insurance_policy;


SELECT
    COUNT(i.policy_name) AS total_policy,
    SUM(q.proposed_premium) AS total_propose_premium
FROM
    quotation q
    JOIN insurance_policy i ON i.quotation_id = q.id;


SELECT
    COUNT(i.insurance_policy_id) AS total_insured,
    SUM(c.coverage_amount) AS total_policy
  
FROM insured_coverage i 
JOIN insurance_policy c ON i.insurance_policy_id = i.id;
JOIN insurance_policy_benefit ON i.insurance_policy_id=id


SELECT
COUNT(DISTINCT e.id) AS total_prospect,
COUNT(DISTINCT c.id) AS total_prospect_company
FROM employee e
JOIN company c ON e.company_id = c.id; 



-- 4.Total HF partner, number of not partner
SELECT
COUNT(*) AS total_hf_partners,
COUNT(*) - COUNT(CASE WHEN is_partner_hf = FALSE THEN 1 END) AS total_non_partner
FROM health_facility;



SELECT COUNT(DISTINCT e.id)-
COUNT(DISTINCT i.employee_id) as total_prospect
  FROM employee e
  LEFT JOIN insured_coverage i ON i.employee_id=e.id


  SELECT COUNT(DISTINCT c.id)-
COUNT(DISTINCT i.company_id) as total_prospect_company
  FROM employee e
  LEFT JOIN insured_coverage i ON i.employee_id=e.id