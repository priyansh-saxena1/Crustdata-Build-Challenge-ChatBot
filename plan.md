Crustdata Build Challenge: Customer Support Agent

Goal
Build a customer support chat bot which answers users questions about Crustdata’s APIs (see link to docs below)

Milestones
Level 0 (Basic static chat)
Requirements
The agent would have a basic chat interface where Crustdata’s users would be able to ask questions about the APIs
The agent would answer any technical questions about Crustdata’s APIs. See example questions and answers in the appendix below.
Note: You don’t need API token for this

How to submit
Send private github repo via email to  abhilash AT crustdata.co
Share link to a working webapp
NOTE: WILL ONLY EVALUATE WITH A WORKING WEBAPP URL
On successful completion:
Technical interview call scheduled with Crustdata team
Note: You would only be judged on your performance in interviews and your work up to Level 0
Level 1 (Agentic behavior)
Requirements
If the answer involves an API request example, validate the API call before sharing it with user
Try to fix the API request by checking the error logs from response
Conversational mode : user can ask follow-up questions in the same thread
How to submit
First submit Level 0
Share code and webapp with  abhilash AT crustdata.co
On successful completion:
USD 500
Level 2 (Ingestion of additional knowledge base)
Add capability to add additional knowledge base to the agent. This would include
Actual question and answers from users and Crustdata’s support slack channels
Update current documentation
Add more API documentation
How to submit
First submit Level 1
Share full code and webapp with  abhilash AT crustdata.co
On successful completion:
USD 2000 (total)
Level 3 (Slack integration)
Integrate the agent with Slack and make a Slack bot for it
This slack bot would work on specific channels
This slack bot would only work for specific users
It would draft a response for each message
How to submit
First submit Level 2
Share full code + webapp + slack agent assets with  abhilash $ crustdata $ co
On successful completion:
USD 6000 (total)
Full-time offer (after 15 min call with CEO)



Appendix
API Docs
https://www.notion.so/crustdata/Crustdata-Discovery-And-Enrichment-API-c66d5236e8ea40df8af114f6d447ab48
https://www.notion.so/crustdata/Crustdata-Dataset-API-Detailed-Examples-b83bd0f1ec09452bb0c2cac811bba88c 

Sample questions and answers

Q: “How do I search for people given their current title, current company and location?”
Sample answer: 
You can use api.crustdata.com/screener/person/search endpoint. Here is an example curl request to find “people with title engineer at OpenAI in San Francisco”
curl --location 'https://api.crustdata.com/screener/person/search' \
--header 'Content-Type: application/json' \
--header 'Authorization: Token $token \
--data '{
    "filters": [
        {
            "filter_type": "CURRENT_COMPANY",
            "type": "in",
            "value": [
                "openai.com"
            ]
        },
        {
            "filter_type": "CURRENT_TITLE",
            "type": "in",
            "value": [
                "engineer"
            ]
        },
        {    "filter_type": "REGION",
            "type": "in",
            "value": [
                "San Francisco, California, United States"
            ]
        }        
    ],
    "page": 1
}'

Q: I tried using the screener/person/search API to compare against previous values this weekend. I am blocked on the filter values. It seems like there's a strict set of values for something like a region. Because of that if I pass in something that doesn't fully conform to the list of enums you support for that filter value, the API call fails. The location fields for us are not normalized so I can't make the calls.
I tried search/enrichment by email but for many entities we have @gmails rather than business emails. Results are not the best.


Is there a standard you're using for the region values? I get this wall of text back when I don't submit a proper region value but it's hard for me to know at a glance how I should format my input
{
   "non_field_errors": [
       "No mapping found for REGION: San Francisco. Correct values are ['Aruba', 'Afghanistan', 'Angola', 'Anguilla', 'Åland Islands', 'Albania', 'Andorra', 'United States', 'United Kingdom', 'United Arab Emirates', 'United States Minor Outlying Islands', 'Argentina', 'Armenia', 'American Samoa', 'US Virgin Islands', 'Antarctica', 'French Polynesia', 'French Guiana', 'French Southern and Antarctic Lands', 'Antigua and Barbuda', 'Australia', 'Austria', 'Azerbaijan', 'Burundi', 'Belgium', 'Benin', 'Burkina Faso', 'Bangladesh', 'Bulgaria', 'Bahrain', 'The Bahamas', 'Bosnia and Herzegovina', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Saint Kitts and Nevis', 'Saint Helena, Ascension and Tristan da
…
		

Sample answer
Yes there is specific list of regions listed here https://crustdata-docs-region-json.s3.us-east-2.amazonaws.com/updated_regions.json . Is there a way you can find the region from this list first and then put the exact values in the search? 
