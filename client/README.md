
# HOSTEL MANAGEMENT SYSTEM
### Hostel management system is a software to perform mundane hostel tasks like hostel leave approval ,complaint registrations etc. 

urls:-

http://localhost:3000/student/dashboard/leave

http://localhost:3000/student/dashboard/complaint

http://localhost:3000/student/dashboard/events

http://localhost:3000/warden/dashboard/

http://localhost:3000/warden/dashboard/leave










# Routes completely established

```http
  POST /api/v1/student/auth/register
```

| Body | Example value|
| :-------- |:--------  |
| `object` | {"name": "any","regNo": "any","block": "any","password": "any","roomNo": "any"}|


```http
  POST /api/v1/student/auth/login
```

| Body  | Example value               |
| :--------  | :------------------------- |
| `object`  | 	{"regNo": "any","password": "any"} |

```http
  GET /api/v1/student/leave/
```

| Body  | Example value               |
| :--------  | :------------------------- |
| `object`  | 	{"message": "Success","data": {"leave": [{"id": 1, "leaveType":"Casual","leaveDate": "2021-05-05", "leaveTime": "10:00:00","LeaveDuration": "1","isApproved": false,"isRejected": false,"studentId": 1,"wardenId": 1}]}}|

```http
  POST /api/v1/student/leave/
```

| Body  | Example value               |
| :--------  | :------------------------- |
| `object`  | 	{"leaveType": "any","leaveDate": "any","leaveTime": "any","leaveDuration": "any"}|

```http
  GET /api/v1/student/complaint/
```

| Body  | Example value               |
| :--------  | :------------------------- |
| `object`  | 	{"message": "Success","data": {"complaint": [{"id": 1,"complaintType": "Electrical","complaintDate": "2021-05-05","complaintDescription": "Lights not working","complaintSeverity": "High","isResolved": false,"studentId": 1,"wardenId": 1}]}}|

```http
  POST /api/v1/student/complaint/
```

| Body  | Example value               |
| :--------  | :------------------------- |
| `object`  | 	{"complaintType": "any","complaintDate": "any","complaintDescription": "any","complaintSeverity": "any"}|

```http
  POST /api/v1/student/event/
```

| Body  | Example value               |
| :--------  | :------------------------- |
| `object`  | {"eventName": "any","eventDescription": "any","eventDate": "any","eventTime": "any","eventVenue": "any","eventOrganiser": "any","participantCount": "any","hostedBy": "any","eventPoster": "any"}|

```http
  GET /api/v1/student/event/
```

| Body  | Example value               |
| :--------  | :------------------------- |
| `object`  | {"message": "Success","data": [{"id": 4,"eventName": "WebVerse3.0","eventDescription": "fiuhgudasisnlgfdg","eventPoster": "url://123/img.jpg","eventDate": "10/10/2023","eventTime": "10:00","eventVenue": "MG Audi","eventOrganiser": "Android Club","participantCount": 12,"hostedBy": "Android Club","isApproved": true,"isRejected": false}]}|

```http
  POST /api/v1/warden/auth/login/
```
| Body  | Example value               |
| :--------  | :------------------------- |
| `object`  |{"block": "any","password": "any"}|

## Sections completed

 - [Student Section]()
 - [Warden Section]()