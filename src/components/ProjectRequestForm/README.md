# Project request form schema

Both form requests are validated and sent as objects.

## Non-profit schema and validation

Object fields:

1. fullName: type string.  
Validation: string, min(2), required.

2. email: type string.  
Validation: string, email, required.

3. phoneNumber: type number.  
Validation: number, required.

4. aboutProject: type string.  
Validation: string, min(30), required.

5. businessType: type string.  
Validation: string, required.

6. nonProfitDesc: type string.  
Validation: string, required.

7. nonProfitWebSite: type string.  
Validation: string, required.

8. nonProfitWebAddress: type string.  
Validation: string, url, conditional validation (field 7):

        nonProfitWebSite === "yes"
                ? schema.required()
                : schema.notRequired();

9. nonProfitTasks: type string.  
Validation: string, min(50), required.

---

## For-profit schema and validation

1. fullName: type string.  
Validation: string, min(2), required.

2. email: type string.  
Validation: string, email, required.

3. phoneNumber: type number.  
Validation: number, required.

4. aboutProject: type string.  
Validation: string, min(30), required.

5. businessType: type string.  
Validation: string, required.

6. businessPlan: type string.  
Validation: string, required.

7. linkToDocs: type string.  
Validation: string, url, required.

8. systemDefinition: type string.  
Validation: string, required.

9. systemDefinitionFile: type string.  
Validation: string, url, conditional validation (field 8):

        systemDefinition === "yes"
                ? schema.required()
                : schema.notRequired();

10. CommunityOrProfit: type string.  
Validation: string, required.

11. isFunded: type string.  
Validation: string, required.
