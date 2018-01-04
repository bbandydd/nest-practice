import { Controller, Get, Request, Response, Next } from '@nestjs/common';

@Controller('chat')
export class ChatController {
    constructor() {}

    @Get()
    async chat(@Request() req, @Response() res, @Next() next) {
        res.render('./Chat/chat', { title: '聊天室' });
    }
}