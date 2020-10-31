import React, {useState,useContext} from 'react'
import {
Tabs,
Tab,
Box,
Typography,
TableBody,
TableCell,
TableRow,
Table,
TableHead,
TextField
} from '@material-ui/core';
import ExamContext from './context/examContext';

const ExamArea = () => {
    const examContext = useContext(ExamContext);

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={2}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    }

    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
    
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const [examName , setName] = useState("");

    const onChangeExamName = (e) => {
      setName(e.target.value);
      console.log(examName);
      examContext.getexamName(examName);
    }

    return (
        <div className="workarea">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs">
                <Tab label="Attend Exam" {...a11yProps(0)} className="tab"  />
                <Tab label="Schedule Exam" {...a11yProps(1)} className="tab" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Table aria-label="simple table" className="table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name} className="tableRows">
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <form autoComplete="off">
            <table>
              <tbody>
                <tr><td>Exam Name</td><td><TextField id="standard-required" value={examName} label="name" variant="outlined" size="small" type="text" align="right" onChange={onChangeExamName} /></td></tr>
              </tbody>
            </table>
            </form>
            </TabPanel>
        </div>
    )
}

export default ExamArea;