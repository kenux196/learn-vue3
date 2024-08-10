import xlsx from 'xlsx';

/**
 * json 데이터를 excel 파일로 변환하는 유틸함수
 *
 * const jsonData = {
 *  header: [['title', 'author']],
 *  body: [
 *    {
 *       title: 'some book1',
 *       author: 'writer1',
 *     },
 *     {
 *        title: 'some book2',
 *        author: 'writer2',
 *     },
 *   ],
 * };
 *
 * @param {string} sheetName
 * @param {string} fileName
 * @param {Array} body
 * @param {Array<string[]>} [header=null]
 */
function exportToExcel(sheetName, fileName, body, header = null) {
  const workBook = xlsx.utils.book_new();

  const workSheet = xlsx.utils.json_to_sheet(body);
  if (header) {
    xlsx.utils.sheet_add_aoa(workSheet, header);
  }
  xlsx.utils.book_append_sheet(workBook, workSheet, sheetName);
  xlsx.writeFile(workBook, fileName);
}

export { exportToExcel };
