def uri_formatter(endpoint: str):
    return f"/api/v1/{endpoint}"

MEETING_ENDPOINT = uri_formatter('meetings')