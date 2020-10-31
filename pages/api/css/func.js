
//常用方法代码段
const func = [

    {
        "author": "jonas",
        "keywords": ["css滚动条样式", "滚动条样式"],
        "code": `
            .scrollstyle {
                &::-webkit-scrollbar {
                /*滚动条整体样式*/
                width: 3px; /*高宽分别对应横竖滚动条的尺寸*/
                height: 3px;
                }
                &::-webkit-scrollbar-thumb {
                /*滚动条里面小方块*/ 
                border-radius: 5px;
                -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
                background: rgba(0, 0, 0, 0.2);
                }
                &::-webkit-scrollbar-track {
                /*滚动条里面轨道*/
                // -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
                border-radius: 0;
                background: transparent;
                // background: rgba(0, 0, 0, 0.1);
                }
            }
        `
    },
    {
        "author": "jonas",
        "keywords": ["清除浮动"],
        "code": `
            .clearfix{
                &:after,&:before{
                    content: '';
                    display: table;
                }
                &:after{
                    clear:both;
                }
            }
        `
    }
]

export default func;