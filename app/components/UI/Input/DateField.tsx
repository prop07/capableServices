// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function DateField({ name, placeholder, onChange, errors, ...props }) {
//     const [value, setValue] = React.useState<Date | null>(null);
//     const today = new Date();

//     return (
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//             <DatePicker
//                 className='w-full '
//                 label={placeholder}
//                 value={value}
//                 onChange={(newValue) => {
//                     onChange(newValue); // Call the onChange function to update the form value
//                 }}
//                 minDate={today}
//                 slotProps={{
//                     textField: {
//                         variant: 'outlined',S
//                         error: errors[name],
//                         helperText: errors[name] ? errors[name].message : null,
//                     },
//                 }}
//             />
//         </LocalizationProvider>
//     );
// }

import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateField({ name, placeholder,value, onChange, errors, ...props }) {
    const today = new Date(new Date().setDate(new Date().getDate()));

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    className="w-full"
                    label={placeholder}
                    value={value}
                    onChange={(newValue) => {
                        onChange(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    minDate={today}
                    slotProps={{
                        textField: {
                            variant: 'outlined',
                            error: errors[name],
                            helperText: errors[name] ? errors[name].message : null,
                        },
                    }}
                />
            </LocalizationProvider>
            {/* <p>{errors[name] ? errors[name].message : null}</p> */}
        </>
    );
}


// "@mui/x-date-pickers": "5.0.3",



