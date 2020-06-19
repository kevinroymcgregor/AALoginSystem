$(document).ready(
    function () {
        const TextBox = document.getElementById("TextBox");

        const subScript = () => {
            const empID = document.getElementById("employeeID").value;
            // console.log(Date.now());
            let d = new Date().toISOString();
            // console.log(d);
            let url = "https://test-api.adp.com"
            $.post(`${url}/events/time/v1/clock.punch`, {
                "events": [
                    {
                        "serviceCategoryCode": {
                            "codeValue": "core"
                        },
                        "eventNameCode": {
                            "codeValue": "clockOffline.punch"
                        },
                        "originator": {
                            "associateOID": empID
                        },
                        "actor": {
                            "associateOID": empID
                        },
                        "data": {
                            "eventContext": {
                                "associateOID": empID
                            },
                            "transform": {
                                "clockEntry": {
                                    "deviceDateTime": d,
                                    "entryDateTime": d,
                                    "actionCode": {
                                        "codeValue": "transfer"
                                    },
                                    "validGeoLocationID": "12",
                                    "laborAllocations": [
                                        {
                                            "allocationCode": {
                                                "codeValue": "205"
                                            },
                                            "allocationTypeCode": {
                                                "codeValue": "project"
                                            }
                                        },
                                        {
                                            "allocationCode": {
                                                "codeValue": "001"
                                            },
                                            "allocationTypeCode": {
                                                "codeValue": "location"
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                ]
            },
                function (data, status) {
                    if (status == "success") {
                        $(TextBox).text(`Successfully logged in user ${empID} \n
                        at ${d} into ${url}`);

                        document.getElementById("employeeID").value = "";

                        console.log(`Successfully logged in user ${empID} \n` 
                            + ` at ${d} into ${url}`);
                    }else{
                        console.log(status);
                    }

                })
        }

        document.getElementById("employeeID").addEventListener("change", subScript);

        // document.getElementById("subButton").addEventListener("click", subScript);
    }
)
