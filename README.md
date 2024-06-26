# REST API

## Description

This document describes the REST API endpoints available for interacting with the application.

## Base URL


## Authentication

All endpoints require authentication using a Bearer token passed in the Authorization header.


## Endpoints

### Generate Token


Description: Endpoint to generate authentication token.

### Create Project


Description: Endpoint to create a new project.

Parameters:
- title (string): Title of the project.
- description (string): Description of the project.
- location (string): Location of the project.
- duration (string): Duration of the project.
- startDate (string): Start date of the project.
- initiatorEmpCode (string): Initiator's employee code.

### Get Dashboard Data


Description: Endpoint to get dashboard data.

Parameters:
- employeeCode (string): Employee code.

### My Learnings


Description: Endpoint to get user's learning data.

Parameters:
- employeeCode (string): Employee code.

### Add Review


Description: Endpoint to add a review for a project.

Parameters:
- projectId (string): ID of the project.
- rating (string): Rating given for the project.
- comment (string): Comment for the project.

### Get Project Details


Description: Endpoint to get details of a project.

Parameters:
- id (string): ID of the project.

### Add Contributor


Description: Endpoint to add a contributor to a project.

Parameters:
- empCode (string): Employee code of the contributor.
- projectId (string): ID of the project.
- message (string): Message for the contributor.
- initiatorEmpCode (string): Initiator's employee code.

### Approve Contributor


Description: Endpoint to approve a contributor for a project.

Parameters:
- projectId (string): ID of the project.
- empCode (string): Employee code of the contributor.

### Get Contributors


Description: Endpoint to get contributors for a project.

Parameters:
- projectId (string): ID of the project.

### Get All Projects


Description: Endpoint to approve projects.

Parameters:
- body (object): JSON object containing projectId.

### Add Milestones


Description: Endpoint to add milestones to a project.

Parameters:
- body (object): JSON object containing milestones.

### Add Attachment


Description: Endpoint to add an attachment to a project.

Parameters:
- body (object): JSON object containing attachment details, contributor ID, and milestone ID.

### Get Attachment


Description: Endpoint to get attachments for a contributor.

Parameters:
- contributorID (string): ID of the contributor.

