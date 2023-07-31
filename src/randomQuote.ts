const quotes = [
    'Cỡ thầy hết năm 2 là đã tự học ngôn ngữ lập trình công ty yêu cầu 1 tuần mà các lập trình viên khác tốn 3 tháng',
    `Don't expect to be easy to work, because if you're 
    easy to do, your heart will be flattered and arrogant.`,
    'If you think you are the best programmer then there will be an indigo programmer who is better than you',
    'Code thủ tục ít thôi ông',
    'Tôi đang code tensor còn ông thì sao?',
];

export function quote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}