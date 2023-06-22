// actualization for the future



// 'use client'

// import useTheme from '@/hooks/useTheme'
// import WordsAndExpressionsCard from './WordsAndExpressionsCard';

// type Props = {
//     id: string,
//     value: any,
// }

// export type Words = {
//     word: string[]
//     translate: string[]
// }

// export type Expressions = {
//     expression: string[];
//     translation: string[]
// }

// const WordsSection = ({id, value}: Props) => {

//     const { darkMode } = useTheme()

//     return (
//         <div
//             id={id}
//             className={`
//                 flex flex-col flex-1 p-3 border border-blue-100 rounded-s-2xl gap-5
//                 ${darkMode ? "bg-dark-100 text-light-50" : "bg-light-200"}
//             `}
//         >
//             {value.map((all: any, i: number) => (
//                 <WordsAndExpressionsCard all={all} value={value} iconCheckColor='text-green-50'/>
//             ))}
//         </div>
//     )
// }

// export default WordsSection


// // <div 
// // id='words'
// // className={`
// // flex flex-col flex-1 p-3 border border-blue-100 rounded-s-2xl gap-5
// // ${darkMode ? "bg-dark-100 text-light-50": "bg-light-200"} 
// // `} >
// // {words.map((all: Words, i: number) => (
// //     <div key={i} className='flex gap-3'>
// //         <span className='text-green-50'>
// //             <CheckCircleOutlineOutlinedIcon />
// //         </span>
// //         <span className='capitalize'>
// //             {all.word} 
// //             <ArrowRightAltIcon/> 
// //             <span className='text-light-500'>{all.translate}</span>
// //         </span>
        
// //     </div>
// // ))}
// // </div>