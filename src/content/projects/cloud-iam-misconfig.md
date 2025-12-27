# Cloud IAM Misconfiguration Scanner

## Overview

An automated security tool that scans AWS environments to detect common IAM misconfigurations and security risks.

## Technologies Used

- Python 3.11
- boto3 (AWS SDK)
- AWS IAM API
- JSON for reporting

## Key Features

### Detection Capabilities

1. **Overprivileged Roles**
   - Identifies roles with admin access
   - Detects wildcard permissions
   - Flags unnecessary resource access

2. **Access Key Management**
   - Finds old/unused access keys
   - Detects keys with excessive permissions
   - Identifies hardcoded credentials

3. **Policy Analysis**
   - Evaluates inline policies
   - Reviews trust relationships
   - Checks for public access

## Usage

```bash
python iam_scanner.py --profile production --region us-east-1
```

## Sample Output

```json
{
  "findings": [
    {
      "severity": "HIGH",
      "type": "Overprivileged Role",
      "resource": "arn:aws:iam::123456789:role/AdminRole",
      "recommendation": "Apply least privilege principle"
    }
  ]
}
```

## Future Enhancements

- Support for Azure and GCP
- Automated remediation suggestions
- Integration with CI/CD pipelines
