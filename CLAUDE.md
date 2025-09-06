# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GeoNorm is a Data-as-a-Service (DaaS) API designed to solve address data inconsistency problems in Latin America. It transforms chaotic addresses into structured, accurate, and reliable data through a hyperlocalized rules and validation engine.

## Development Workflow

### Local Development (Primary)
- **Command**: `uvicorn src.api.app:app --reload` (run from `geonorm-api` directory)
- **URL**: http://127.0.0.1:8000/v1/normalize
- **Documentation**: Available at http://127.0.0.1:8000/docs and http://127.0.0.1:8000/redoc
- **Use Case**: 90% of development time - faster iteration with hot reload

### AWS SAM Local Testing (Integration)
- **Build**: `sam build --use-container` (from `geonorm-api` directory)
- **Start**: `sam local start-api`
- **Use Case**: Final integration testing before deployment to verify Lambda context

### Testing
- **Unit Tests**: `pytest` (run from repository root)
- **Test Location**: `geonorm-api/tests/`
- **Test Dependencies**: Install via `pip install -r geonorm-api/tests/requirements.txt`

### Deployment
- **Build**: `sam build --use-container`
- **Deploy**: `sam deploy`

## Architecture

### Tech Stack
- **Runtime**: Python 3.12
- **Framework**: FastAPI with Mangum for AWS Lambda
- **Infrastructure**: AWS SAM (Serverless Application Model)
- **Logging**: AWS Lambda Powertools for structured logging
- **API Gateway**: Amazon API Gateway with API key authentication

### Project Structure
```
geonorm-api/
├── src/
│   ├── api/
│   │   ├── app.py          # Main FastAPI application and Lambda handler
│   │   └── models.py       # Pydantic models (auto-generated from OpenAPI spec)
│   ├── core/               # Business logic (to be developed)
│   └── requirements.txt
├── tests/
│   ├── test_api.py         # API endpoint tests
│   └── requirements.txt
├── events/                 # Sample Lambda events for testing
├── template.yaml           # AWS SAM infrastructure template
└── samconfig.toml         # SAM deployment configuration
```

### API Design
- **API Contract**: Defined in `docs/openapi.yaml` (API-first approach)
- **Models**: Auto-generated Pydantic models in `src/api/models.py`
- **Endpoints**: Currently implements `/v1/normalize` endpoint
- **Authentication**: API key required for all endpoints (except documentation)

### Key Components
- **FastAPI App**: Main application in `src/api/app.py` with Mangum adapter for Lambda
- **Lambda Handler**: `api.app.handler` configured in `template.yaml`
- **Logging**: Structured JSON logging with Lambda Powertools
- **Testing**: FastAPI TestClient for unit tests

### Architecture Principles
- **Serverless-First**: AWS Lambda with minimal operational overhead
- **API-First**: OpenAPI specification drives implementation
- **Security by Design**: API key authentication required
- **Full CI/CD Automation**: Automated deployments and testing

## Important Files
- `docs/architechture.md`: Detailed system architecture documentation
- `docs/openapi.yaml`: Complete API specification
- `geonorm-api/template.yaml`: AWS infrastructure definition
- `geonorm-api/src/api/models.py`: Generated from OpenAPI spec - regenerate when spec changes

## Development Notes
- The codebase uses Spanish for comments and documentation as it targets Latin American markets
- Models are auto-generated from OpenAPI spec - avoid manual editing
- API requires authentication via API key for all endpoints except documentation
- Lambda function has 15-second timeout and 256MB memory allocation