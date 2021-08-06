let resources = {
    '1':{
            id: '1',
            name: 'Resource1',
            quantity:5,
            availableDateFrom:1628095103083,
            availableDateTo: 1629477794000 //time and date in milliseconds
        },
    '2':{
            id: '2',
            name: 'Resource2',
            quantity:3,
            availableDateFrom:1627922594000,
            availableDateTo: 1628440994000
            },
    '3':{
            id: '3',
            name: 'Resource3',
            quantity:1,
            availableDateFrom:1628268194000,
            availableDateTo: 1627836194000
        }
    }
let booking = []

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function getResources () {
    return new Promise((res, rej) => {
    setTimeout(() => res(resources), 2000)
    })
}

export function formatBooking ({ dateFrom,dateTo,bookedQuantity,resourceId}) {
    return {
    id: generateUID(),
    dateFrom,
    dateTo,
    bookedQuantity,
    resourceId
    }
}

export function saveBooking (info) {
    return new Promise((res, rej) => {
    const formattedBooking = formatBooking(info);
    console.log(formattedBooking)
    setTimeout(() => {
        booking.push(formattedBooking)
        resources = {
            ...resources,
            [formattedBooking.resourceId]: {
                ...resources[formattedBooking.resourceId],
                quantity :  resources[formattedBooking.resourceId].quantity - formattedBooking.bookedQuantity
            }
        }
        res(formattedBooking)
    }, 1000)
    })
}

  // function updateVeryNestedField(state, action) {
        //     return {
        //       ...state,
        //       first: {
        //         ...state.first,
        //         second: {
        //           ...state.first.second,
        //           [action.someId]: {
        //             ...state.first.second[action.someId],
        //             fourth: action.someValue
        //           }
        //         }
        //       }
        //     }
        //   }