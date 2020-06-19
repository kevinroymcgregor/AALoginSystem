$(document).ready(
    function () {
        const subScript = () => {
            const empID = document.getElementById("employeeID").value;
            $.post("https://test-api.adp.com/events/time/v1/clock.punch", {
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
                                    "deviceDateTime": "2020-06-18T00:00:00-04:00",
                                    "entryDateTime": "2020-06-18T00:00:00-04:00",
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
                    console.log("Status: " + status)
                })
        }

        document.getElementById("subButton").addEventListener("click", subScript);
    }
)
