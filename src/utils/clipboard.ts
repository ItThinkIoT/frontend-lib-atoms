export function copyToClipboard(data: string): Promise<void> {
    return new Promise((resolve, reject) => {

        if (navigator.clipboard) {
            navigator.clipboard.writeText(data)
                .then(() => {
                    resolve()
                })
                .catch((err) => {
                    reject(err)
                })
        } else {
            // Fallback for older browsers
            var textarea = document.createElement('textarea')
            textarea.value = data
            textarea.setAttribute('readonly', '')
            textarea.style.position = 'absolute'
            textarea.style.left = '-9999px'
            document.body.appendChild(textarea)
            textarea.select()
            document.execCommand('copy')
            document.body.removeChild(textarea)
            resolve()
        }


    })
}