export let viewsData: Array<string> = ['Day', 'Week', 'Month'];

export let personsData: { [key: string]: Object }[] = [
    {
        Name: 'Joseph Mbuku',
        Allocation: 'Individual',
        Text: 'josephAdmin',
        Id: 1,
        DepartmentId: 1,
        Color: '#ea7a57',
        Education: 'MBBS, DMRD',
        Specialization: 'leaddeveloper',
        Experience: '10+ years',
        Designation: 'Senior Specialist',
        DutyTiming: 'Shift1',
        Email: 'nembo36@sample.com',
        Mobile: '(206) 555-9482',
        Availability: 'busy',
        StartHour: '08:00',
        EndHour: '17:00',
        AvailableDays: [0, 2, 3, 4, 5],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 1, 8, 0),
                WorkEndHour: new Date(2018, 6, 1, 17, 0),
                BreakStartHour: new Date(2018, 6, 1, 12, 0),
                BreakEndHour: new Date(2018, 6, 1, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 2, 8, 0),
                WorkEndHour: new Date(2018, 6, 2, 17, 0),
                BreakStartHour: new Date(2018, 6, 2, 12, 0),
                BreakEndHour: new Date(2018, 6, 2, 13, 0),
                State: 'TimeOff',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 3, 8, 0),
                WorkEndHour: new Date(2018, 6, 3, 17, 0),
                BreakStartHour: new Date(2018, 6, 3, 12, 0),
                BreakEndHour: new Date(2018, 6, 3, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 4, 8, 0),
                WorkEndHour: new Date(2018, 6, 4, 17, 0),
                BreakStartHour: new Date(2018, 6, 4, 12, 0),
                BreakEndHour: new Date(2018, 6, 4, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 5, 8, 0),
                WorkEndHour: new Date(2018, 6, 5, 17, 0),
                BreakStartHour: new Date(2018, 6, 5, 12, 0),
                BreakEndHour: new Date(2018, 6, 5, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 6, 8, 0),
                WorkEndHour: new Date(2018, 6, 6, 17, 0),
                BreakStartHour: new Date(2018, 6, 6, 12, 0),
                BreakEndHour: new Date(2018, 6, 6, 13, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 7, 8, 0),
                WorkEndHour: new Date(2018, 6, 7, 17, 0),
                BreakStartHour: new Date(2018, 6, 7, 12, 0),
                BreakEndHour: new Date(2018, 6, 7, 13, 0),
                State: 'TimeOff'
            }
        ]
    },
    {
        Name: 'Mollie Cobb',
        Allocation: 'Group',
        Text: 'default',
        Id: 2,
        DepartmentId: 2,
        Color: '#7fa900',
        Education: 'MBBS, MD DESIGN, DM GRAPHICS',
        Specialization: 'frontenddeveloper',
        Experience: '2+ years',
        Designation: 'Junior Specialist',
        Email: 'mollie65@rpy.com',
        DutyTiming: 'Shift2',
        Mobile: '(206) 555-3412',
        Availability: 'available',
        StartHour: '10:00',
        EndHour: '19:00',
        AvailableDays: [0, 1, 2, 3, 4],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 1, 10, 0),
                WorkEndHour: new Date(2018, 6, 1, 19, 0),
                BreakStartHour: new Date(2018, 6, 1, 14, 0),
                BreakEndHour: new Date(2018, 6, 1, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 2, 10, 0),
                WorkEndHour: new Date(2018, 6, 2, 19, 0),
                BreakStartHour: new Date(2018, 6, 2, 14, 0),
                BreakEndHour: new Date(2018, 6, 2, 15, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 3, 10, 0),
                WorkEndHour: new Date(2018, 6, 3, 19, 0),
                BreakStartHour: new Date(2018, 6, 3, 14, 0),
                BreakEndHour: new Date(2018, 6, 3, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 4, 10, 0),
                WorkEndHour: new Date(2018, 6, 4, 19, 0),
                BreakStartHour: new Date(2018, 6, 4, 14, 0),
                BreakEndHour: new Date(2018, 6, 4, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 5, 10, 0),
                WorkEndHour: new Date(2018, 6, 5, 19, 0),
                BreakStartHour: new Date(2018, 6, 5, 14, 0),
                BreakEndHour: new Date(2018, 6, 5, 15, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 6, 10, 0),
                WorkEndHour: new Date(2018, 6, 6, 19, 0),
                BreakStartHour: new Date(2018, 6, 6, 14, 0),
                BreakEndHour: new Date(2018, 6, 6, 15, 0),
                State: 'TimeOff',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 7, 10, 0),
                WorkEndHour: new Date(2018, 6, 7, 19, 0),
                BreakStartHour: new Date(2018, 6, 7, 14, 0),
                BreakEndHour: new Date(2018, 6, 7, 15, 0),
                State: 'TimeOff'
            }
        ]
    },
    {
        Name: 'Yara Barros',
        Allocation: 'Group',
        Text: 'default',
        Id: 3,
        DepartmentId: 1,
        Color: '#fec200',
        Education: 'MBBS, DNB (FULL STACK DEV)',
        Specialization: 'leaddeveloper',
        Experience: '8+ years',
        Designation: 'Senior Specialist',
        DutyTiming: 'Shift3',
        Email: 'yara105@sample.com',
        Mobile: '(206) 555-8122',
        Availability: 'away',
        StartHour: '12:00',
        EndHour: '21:00',
        AvailableDays: [1, 2, 3, 4, 5],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 1, 12, 0),
                WorkEndHour: new Date(2018, 6, 1, 21, 0),
                BreakStartHour: new Date(2018, 6, 1, 16, 0),
                BreakEndHour: new Date(2018, 6, 1, 17, 0),
                State: 'TimeOff',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 2, 12, 0),
                WorkEndHour: new Date(2018, 6, 2, 21, 0),
                BreakStartHour: new Date(2018, 6, 2, 16, 0),
                BreakEndHour: new Date(2018, 6, 2, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 3, 12, 0),
                WorkEndHour: new Date(2018, 6, 3, 21, 0),
                BreakStartHour: new Date(2018, 6, 3, 16, 0),
                BreakEndHour: new Date(2018, 6, 3, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 4, 12, 0),
                WorkEndHour: new Date(2018, 6, 4, 21, 0),
                BreakStartHour: new Date(2018, 6, 4, 16, 0),
                BreakEndHour: new Date(2018, 6, 4, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 5, 12, 0),
                WorkEndHour: new Date(2018, 6, 5, 21, 0),
                BreakStartHour: new Date(2018, 6, 5, 16, 0),
                BreakEndHour: new Date(2018, 6, 5, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 6, 12, 0),
                WorkEndHour: new Date(2018, 6, 6, 21, 0),
                BreakStartHour: new Date(2018, 6, 6, 16, 0),
                BreakEndHour: new Date(2018, 6, 6, 17, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 7, 12, 0),
                WorkEndHour: new Date(2018, 6, 7, 21, 0),
                BreakStartHour: new Date(2018, 6, 7, 16, 0),
                BreakEndHour: new Date(2018, 6, 7, 17, 0),
                State: 'TimeOff'
            }
        ]
    },
    {
        Name: 'Paul Walker',
        Allocation: 'Individual',
        Text: 'default',
        Id: 4,
        DepartmentId: 3,
        Color: '#865fcf',
        Education: 'MBBS, MD (JAVA Certified)',
        Designation: 'Senior Back End Developer',
        Specialization: 'backenddeveloper',
        Experience: '10+ years',
        DutyTiming: 'Shift1',
        Email: 'paul39@mail.com',
        Mobile: '(71) 555-4848',
        Availability: 'busy',
        StartHour: '08:00',
        EndHour: '17:00',
        AvailableDays: [2, 3, 4, 5, 6],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 1, 8, 0),
                WorkEndHour: new Date(2018, 6, 1, 17, 0),
                BreakStartHour: new Date(2018, 6, 1, 12, 0),
                BreakEndHour: new Date(2018, 6, 1, 13, 0),
                State: 'TimeOff',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 2, 8, 0),
                WorkEndHour: new Date(2018, 6, 2, 17, 0),
                BreakStartHour: new Date(2018, 6, 2, 12, 0),
                BreakEndHour: new Date(2018, 6, 2, 13, 0),
                State: 'TimeOff',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 3, 8, 0),
                WorkEndHour: new Date(2018, 6, 3, 17, 0),
                BreakStartHour: new Date(2018, 6, 3, 12, 0),
                BreakEndHour: new Date(2018, 6, 3, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 4, 8, 0),
                WorkEndHour: new Date(2018, 6, 4, 17, 0),
                BreakStartHour: new Date(2018, 6, 4, 12, 0),
                BreakEndHour: new Date(2018, 6, 4, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 5, 8, 0),
                WorkEndHour: new Date(2018, 6, 5, 17, 0),
                BreakStartHour: new Date(2018, 6, 5, 12, 0),
                BreakEndHour: new Date(2018, 6, 5, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 6, 8, 0),
                WorkEndHour: new Date(2018, 6, 6, 17, 0),
                BreakStartHour: new Date(2018, 6, 6, 12, 0),
                BreakEndHour: new Date(2018, 6, 6, 13, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 7, 8, 0),
                WorkEndHour: new Date(2018, 6, 7, 17, 0),
                BreakStartHour: new Date(2018, 6, 7, 12, 0),
                BreakEndHour: new Date(2018, 6, 7, 13, 0),
                State: 'AddBreak'
            }
        ]
    },
    {
        Name: 'Amelia Edwards',
        Allocation: 'Group',
        Text: 'default',
        Id: 5,
        DepartmentId: 4,
        Color: '#1aaa55',
        Education: 'MBBS, MD',
        Designation: 'Senior Security Expert',
        Specialization: 'securityexpert',
        Experience: '10+ years',
        DutyTiming: 'Shift2',
        Email: 'amelia101@rpy.com',
        Mobile: '(71) 555-7773',
        Availability: 'available',
        StartHour: '10:00',
        EndHour: '19:00',
        AvailableDays: [0, 2, 3, 4, 5],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 1, 10, 0),
                WorkEndHour: new Date(2018, 6, 1, 19, 0),
                BreakStartHour: new Date(2018, 6, 1, 14, 0),
                BreakEndHour: new Date(2018, 6, 1, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 2, 10, 0),
                WorkEndHour: new Date(2018, 6, 2, 19, 0),
                BreakStartHour: new Date(2018, 6, 2, 14, 0),
                BreakEndHour: new Date(2018, 6, 2, 15, 0),
                State: 'TimeOff',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 3, 10, 0),
                WorkEndHour: new Date(2018, 6, 3, 19, 0),
                BreakStartHour: new Date(2018, 6, 3, 14, 0),
                BreakEndHour: new Date(2018, 6, 3, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 4, 10, 0),
                WorkEndHour: new Date(2018, 6, 4, 19, 0),
                BreakStartHour: new Date(2018, 6, 4, 14, 0),
                BreakEndHour: new Date(2018, 6, 4, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 5, 10, 0),
                WorkEndHour: new Date(2018, 6, 5, 19, 0),
                BreakStartHour: new Date(2018, 6, 5, 14, 0),
                BreakEndHour: new Date(2018, 6, 5, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 6, 10, 0),
                WorkEndHour: new Date(2018, 6, 6, 19, 0),
                BreakStartHour: new Date(2018, 6, 6, 14, 0),
                BreakEndHour: new Date(2018, 6, 6, 15, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 7, 10, 0),
                WorkEndHour: new Date(2018, 6, 7, 19, 0),
                BreakStartHour: new Date(2018, 6, 7, 14, 0),
                BreakEndHour: new Date(2018, 6, 7, 15, 0),
                State: 'TimeOff'
            }
        ]
    },
    {
        Name: 'Alexa Richardson',
        Allocation: 'Group',
        Text: 'default',
        Id: 6,
        DepartmentId: 5,
        Color: '#df5286',
        Education: 'MD, DM, FACC, FICC',
        Designation: 'Practitioner',
        Specialization: 'aideveloper',
        Experience: '1+ years',
        DutyTiming: 'Shift2',
        Email: 'alexa55@sample.com',
        Mobile: '(71) 555-5598',
        Availability: 'busy',
        StartHour: '10:00',
        EndHour: '19:00',
        AvailableDays: [2, 3, 4, 5, 6],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 1, 10, 0),
                WorkEndHour: new Date(2018, 6, 1, 19, 0),
                BreakStartHour: new Date(2018, 6, 1, 14, 0),
                BreakEndHour: new Date(2018, 6, 1, 15, 0),
                State: 'TimeOff',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 2, 10, 0),
                WorkEndHour: new Date(2018, 6, 2, 19, 0),
                BreakStartHour: new Date(2018, 6, 2, 14, 0),
                BreakEndHour: new Date(2018, 6, 2, 15, 0),
                State: 'TimeOff',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 3, 10, 0),
                WorkEndHour: new Date(2018, 6, 3, 19, 0),
                BreakStartHour: new Date(2018, 6, 3, 14, 0),
                BreakEndHour: new Date(2018, 6, 3, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 4, 10, 0),
                WorkEndHour: new Date(2018, 6, 4, 19, 0),
                BreakStartHour: new Date(2018, 6, 4, 14, 0),
                BreakEndHour: new Date(2018, 6, 4, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 5, 10, 0),
                WorkEndHour: new Date(2018, 6, 5, 19, 0),
                BreakStartHour: new Date(2018, 6, 5, 14, 0),
                BreakEndHour: new Date(2018, 6, 5, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 6, 10, 0),
                WorkEndHour: new Date(2018, 6, 6, 19, 0),
                BreakStartHour: new Date(2018, 6, 6, 14, 0),
                BreakEndHour: new Date(2018, 6, 6, 15, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 7, 10, 0),
                WorkEndHour: new Date(2018, 6, 7, 19, 0),
                BreakStartHour: new Date(2018, 6, 7, 14, 0),
                BreakEndHour: new Date(2018, 6, 7, 15, 0),
                State: 'AddBreak'
            }
        ]
    },
    {
        Name: 'Nout Golstein',
        Allocation: 'Individual',
        Text: 'default',
        Id: 7,
        DepartmentId: 6,
        Color: '#00bdae',
        Education: 'MS',
        Designation: 'Junior Director',
        Specialization: 'director',
        Experience: '2+ years',
        DutyTiming: 'Shift3',
        Email: 'nout49@rpy.com',
        Mobile: '(206) 555-1189',
        Availability: 'busy',
        StartHour: '12:00',
        EndHour: '21:00',
        AvailableDays: [0, 3, 4, 5, 6],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 1, 12, 0),
                WorkEndHour: new Date(2018, 6, 1, 21, 0),
                BreakStartHour: new Date(2018, 6, 1, 16, 0),
                BreakEndHour: new Date(2018, 6, 1, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 2, 12, 0),
                WorkEndHour: new Date(2018, 6, 2, 21, 0),
                BreakStartHour: new Date(2018, 6, 2, 16, 0),
                BreakEndHour: new Date(2018, 6, 2, 17, 0),
                State: 'TimeOff',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: false,
                WorkStartHour: new Date(2018, 6, 3, 12, 0),
                WorkEndHour: new Date(2018, 6, 3, 21, 0),
                BreakStartHour: new Date(2018, 6, 3, 16, 0),
                BreakEndHour: new Date(2018, 6, 3, 17, 0),
                State: 'TimeOff',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 4, 12, 0),
                WorkEndHour: new Date(2018, 6, 4, 21, 0),
                BreakStartHour: new Date(2018, 6, 4, 16, 0),
                BreakEndHour: new Date(2018, 6, 4, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 5, 12, 0),
                WorkEndHour: new Date(2018, 6, 5, 21, 0),
                BreakStartHour: new Date(2018, 6, 5, 16, 0),
                BreakEndHour: new Date(2018, 6, 5, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 6, 12, 0),
                WorkEndHour: new Date(2018, 6, 6, 21, 0),
                BreakStartHour: new Date(2018, 6, 6, 16, 0),
                BreakEndHour: new Date(2018, 6, 6, 17, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: true,
                WorkStartHour: new Date(2018, 6, 7, 12, 0),
                WorkEndHour: new Date(2018, 6, 7, 21, 0),
                BreakStartHour: new Date(2018, 6, 7, 16, 0),
                BreakEndHour: new Date(2018, 6, 7, 17, 0),
                State: 'AddBreak'
            }
        ]
    }
];

export let tasksData: { [key: string]: Object }[] = [
    {
        Id: 1,
        Name: 'IT team meeting',
        Text: 'Laura',
        DepartmentName: 'GENERAL',
        Allocation: 'Group',
        Description: 'Important to discuss work conditions and renumeration'
    },
    {
        Id: 2,
        Name: 'Test for SQL Injections',
        Text: 'Milka',
        DepartmentName: 'SECURITYEXPERT',
        Allocation: 'Group',
        Description: 'Neccessarry to ensure hack proof systems'
    },
    {
        Id: 3,
        Name: 'Mobile Development For Airport client',
        Text: 'Adams',
        DepartmentName: 'LEADDEVELOPER',
        Allocation: 'Individual',
        Description: 'Important due end of the month',
    },
    {
        Id: 4,
        Name: 'Client category algorithim',
        Text: 'Janet',
        DepartmentName: 'AIDEVELOPER',
        Allocation: 'Individual',
        Description: 'Needed urgently by the marketing team',
    },
    {
        Id: 5,
        Name: 'Progress Update by teams',
        Text: 'Mercy',
        DepartmentName: 'DERMATOLOGY',
        Allocation: 'Group',
        Description: 'Important and Urgent for company perspectives '
    },
    {
        Id: 6,
        Name: 'Host the backend API',
        Text: 'Richa',
        DepartmentName: 'BACKENDDEVELOPER',
        Allocation: 'Group',
        Description: 'To prevent connection crises',
    },
    {
        Id: 7,
        Name: 'Improve graphics of our website',
        Text: 'MaudOliver',
        DepartmentName: 'FRONTENDDEVELOPER',
        Allocation: 'Individual',
        Description: 'Important for user navigation',
    }
];

export let waitingList: { [key: string]: Object }[] = [
    {
        Id: 1,
        Name: 'To automate deloyment',
        StartTime: new Date(2018, 6, 3, 8, 30),
        EndTime: new Date(2018, 6, 3, 9, 30),
        DepartmentName: 'LEADDEVELOPER',
        DepartmentId: 1,
        TaskId: 1
    }, {
        Id: 2,
        Name: 'Improve graphics of our website',
        StartTime: new Date(2018, 6, 4, 8, 30),
        EndTime: new Date(2018, 6, 4, 10, 30),
        DepartmentName: 'FRONTENDDEVELOPER',
        DepartmentId: 4,
        TaskId: 2
    }, {
        Id: 3,
        Name: 'Host the backend API',
        StartTime: new Date(2018, 6, 4, 9, 30),
        EndTime: new Date(2018, 6, 4, 10, 30),
        DepartmentName: 'BACKENDDEVELOPER',
        DepartmentId: 3,
        TaskId: 3
    }, {
        Id: 4,
        Name: 'Give go Ahead of tested App',
        StartTime: new Date(2018, 6, 3, 11, 0),
        EndTime: new Date(2018, 6, 3, 12, 30),
        DepartmentName: 'CYBERSECURITY',
        DepartmentId: 5,
        TaskId: 4
    }
];

export let companyData: Object[] = [
    {
        Id: 1000,
        Name: 'Host back-end API',
        StartTime: new Date(2018, 6, 5, 10, 30),
        EndTime: new Date(2018, 6, 5, 11, 30),
        DepartmentName: 'BACKENDDEVELOPER',
        DepartmentId: 4,
        PersonId: 5,
        TaskId: 2,
        Description: 'To prevent connection crises'
    }, {
        Id: 1001,
        Name: 'Automating dev changes',
        StartTime: new Date(2018, 6, 3, 11, 0),
        EndTime: new Date(2018, 6, 3, 12, 0),
        DepartmentName: 'LEADDEVELOPER',
        DepartmentId: 1,
        PersonId: 3,
        TaskId: 4,
        Description: 'Important to making changes by group on git hub'
    }, {
        Id: 1002,
        Name: 'Patching Authentication Vulnerability',
        Disease: 'Skin Problem',
        DepartmentName: 'CYBERSECURITY',
        DepartmentId: 3,
        StartTime: new Date(2018, 6, 2, 10, 0),
        EndTime: new Date(2018, 6, 2, 11, 0),
        PersonId: 4,
        TaskId: 5,
        Description: 'Neccessarry to ensure hack proof systems'
    }, {
        Id: 1003,
        Name: 'Testing to prod',
        DepartmentName: 'LEADDEVELOPER',
        DepartmentId: 5,
        StartTime: new Date(2018, 6, 9, 10, 0),
        EndTime: new Date(2018, 6, 9, 11, 0),
        PersonId: 6,
        TaskId: 1,
        Description: 'Important to ensure working on the production server'
    }, {
        Id: 1004,
        Name: 'Test for SQL Injections',
        DepartmentName: 'CYBERSECURITY',
        DepartmentId: 3,
        StartTime: new Date(2018, 6, 7, 10, 0),
        EndTime: new Date(2018, 6, 7, 11, 0),
        PersonId: 4,
        TaskId: 2,
        Description: 'Important to ensure hack proof systems'
    }, {
        Id: 1005,
        Name: 'Host the backend API',
        DepartmentName: 'BACKENDDEVELOPER',
        DepartmentId: 1,
        StartTime: new Date(2018, 6, 7, 13, 30),
        EndTime: new Date(2018, 6, 7, 14, 0),
        PersonId: 1,
        TaskId: 3,
        Description: 'Important To prevent connection crises'
    }, {
        Id: 1006,
        Name: 'Skyward Mobile App for client presentation',
        DepartmentName: 'DIRECTOR',
        DepartmentId: 4,
        StartTime: new Date(2018, 6, 7, 16, 0),
        EndTime: new Date(2018, 6, 7, 17, 0),
        PersonId: 5,
        TaskId: 6,
        Description: 'Not urgent but, important for client to see progress'
    }, {
        Id: 1007,
        Name: 'Query cellulant for unconfirmed transactions',
        DepartmentName: 'LEADDEVELOPER',
        DepartmentId: 6,
        StartTime: new Date(2018, 6, 13, 11, 0),
        EndTime: new Date(2018, 6, 13, 11, 30),
        PersonId: 7,
        TaskId: 2,
        Description: 'Not important, but urgent for confrimations'
    }, {
        Id: 1008,
        Name: 'Go for company retreat',
        DepartmentName: 'DIRECTOR',
        DepartmentId: 3,
        StartTime: new Date(2018, 6, 13, 9, 0),
        EndTime: new Date(2018, 6, 13, 10, 0),
        PersonId: 4,
        TaskId: 2,
        Description: 'Not urgent, but important to unwind'
    }];

export let specializationData: Object[] = [
    { DepartmentId: 1, Id: 'leaddeveloper', Text: 'Lead Developer', Color: '#F538B2' },
    { DepartmentId: 2, Id: 'frontenddeveloper', Text: 'Front End Developer', Color: '#33C7E8' },
    { DepartmentId: 3, Id: 'backenddeveloper', Text: 'Back End Developer', Color: '#916DE4' },
    { DepartmentId: 4, Id: 'securityexpert', Text: 'Security Expert', Color: '#388CF5' },
    { DepartmentId: 5, Id: 'aideveloper', Text: 'Ai Developer', Color: '#60F238' },
    { DepartmentId: 6, Id: 'director', Text: 'Director', Color: '#F29438' }
];

export let experienceData: Object[] = [
    { Id: '1+ years', Text: '1+ years' },
    { Id: '2+ years', Text: '2+ years' },
    { Id: '5+ years', Text: '5+ years' },
    { Id: '10+ years', Text: '10+ years' },
    { Id: '15+ years', Text: '15+ years' },
    { Id: '20+ years', Text: '20+ years' }
];

export let dutyTimingsData: Object[] = [
    { Id: 'Shift1', Text: '08:00 AM - 5:00 PM' },
    { Id: 'Shift2', Text: '10:00 AM - 7:00 PM' },
    { Id: 'Shift3', Text: '12:00 AM - 9:00 PM' }
];

export let activityData: Object[] = [
    {
        Name: 'Added New Person',
        Message: 'Mr.Martin Ndegwa, Director',
        Time: '5 mins ago',
        Type: 'person',
        ActivityTime: new Date(2018, 6, 1, 9, 0)
    },
    {
        Name: 'Added New Appointment',
        Message: 'Warehouse project client walkthrough on 7th July, 2018 @ 8.30 AM with Mr. Joe Marwa',
        Time: '5 mins ago',
        Type: 'appointment',
        ActivityTime: new Date(2018, 6, 1, 11, 0)
    },
    {
        Name: 'Added New Task',
        Message: 'Query cellulant for unconfirmed transactions',
        Time: '5 mins ago',
        Type: 'task',
        ActivityTime: new Date(2018, 6, 1, 10, 0)
    },
    {
        Name: 'Added New Appointment',
        Message: 'Skyward Mobile App for client presentation on 7th Feb, 2019 @ 11.10AM with Mr.Joseph Mbuku',
        Time: '5 mins ago',
        Type: 'appointment',
        ActivityTime: new Date(2018, 6, 1, 11, 0)
    }
];

// Preference module data

export let timeSlots: Object[] = [
    { Value: 10, Text: '10 min' },
    { Value: 20, Text: '20 min' },
    { Value: 30, Text: '30 min' },
    { Value: 60, Text: '60 min' },
    { Value: 120, Text: '120 min' }
];

export let startHours: Object[] = [
    { Value: '08:00', Text: '8.00 am' },
    { Value: '09:00', Text: '9.00 am' },
    { Value: '10:00', Text: '10.00 am' },
    { Value: '11:00', Text: '11.00 am' },
    { Value: '12:00', Text: '12.00 am' }
];

export let endHours: Object[] = [
    { Value: '16:00', Text: '4.00 pm' },
    { Value: '17:00', Text: '5.00 pm' },
    { Value: '18:00', Text: '6.00 pm' },
    { Value: '19:00', Text: '7.00 pm' },
    { Value: '20:00', Text: '8.00 pm' },
    { Value: '21:00', Text: '9.00 pm' }
];

export let views: Object[] = [
    { Value: 'Day', Text: 'Daily' },
    { Value: 'Week', Text: 'Weekly' },
    { Value: 'Month', Text: 'Monthly' }
];

export let colorCategory: Object[] = [
    { Value: 'Departments', Text: 'Department Colors' },
    { Value: 'Persons', Text: 'Persons Colors' }
];

export let bloodGroupData: Object[] = [
    { Value: 'AB+ve', Text: 'AB+ ve' },
    { Value: 'A+ve', Text: 'A+ ve' },
    { Value: 'B+ve', Text: 'B+ ve' },
    { Value: 'O+ve', Text: 'O+ ve' },
    { Value: 'AB-ve', Text: 'AB- ve' },
    { Value: 'A-ve', Text: 'A- ve' },
    { Value: 'B-ve', Text: 'B- ve' },
    { Value: 'O-ve', Text: 'O- ve' }
];

export let dayOfWeekList: Object[] = [
    { Value: 0, Text: 'Sunday' },
    { Value: 1, Text: 'Monday' },
    { Value: 2, Text: 'Tuesday' },
    { Value: 3, Text: 'Wednesday' },
    { Value: 4, Text: 'Thursday' },
    { Value: 5, Text: 'Friday' },
    { Value: 6, Text: 'Saturday' }
];

// shift wise block data
export let shift1BlockData = [
    {
        Id: 50,
        Name: 'Off Work',
        StartTime: new Date(2018, 6, 2, 17, 0),
        EndTime: new Date(2018, 6, 2, 21, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        PersonId: [1, 2, 3, 4, 5, 6, 7]
    }
];

export let shift2BlockData = [
    {
        Id: 51,
        Name: 'Off Work',
        StartTime: new Date(2018, 6, 2, 8, 0),
        EndTime: new Date(2018, 6, 2, 10, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        PersonId: [1, 2, 3, 4, 5, 6, 7]
    }, {
        Id: 52,
        Name: 'Off Work',
        StartTime: new Date(2018, 6, 2, 19, 0),
        EndTime: new Date(2018, 6, 2, 21, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        PersonId: [1, 2, 3, 4, 5, 6, 7]
    },
];

export let shift3BlockData = [
    {
        Id: 53,
        Name: 'Off Work',
        StartTime: new Date(2018, 6, 2, 8, 0),
        EndTime: new Date(2018, 6, 2, 12, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        PersonId: [1, 2, 3, 4, 5, 6, 7]
    }
];
