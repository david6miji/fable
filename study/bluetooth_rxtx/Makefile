#
# FABLE Æß¿þ¾î¿ë Makefile
#

CROSS_PREFIX	= 	arm-none-eabi-

TARGET			= 	bluetooth_rxtx

SRCS			= 	

SRCS			+= 	bluetooth_rxtx.c
SRCS			+= 	bluetooth.c
SRCS			+= 	bluetooth_le.c
SRCS			+= 	ubertooth_usb.c
SRCS			+= 	cc2400_rangetest.c
SRCS			+= 	ego.c
SRCS			+= 	usb_serial.c
SRCS			+= 	serial_fifo.c
SRCS			+= 	LPC17xx_Startup.c
SRCS			+= 	LPC17xx_Interrupts.c
SRCS			+= 	ubertooth.c
SRCS			+= 	usbcontrol.c
SRCS			+= 	usbinit.c
SRCS			+= 	usbhw_lpc.c
SRCS			+= 	usbstdreq.c

OBJS			= $(SRCS:.c=.o)

LIBS			=

INCLUDE_DIRS		= 
INCLUDE_DIRS		+= -I. 
INCLUDE_DIRS		+= -I../common
INCLUDE_DIRS		+= -I../common/lpcusb/target
INCLUDE_DIRS		+= -I../../host/libubertooth/src

LIB_DIRS			= 
LIB_DIRS			+= -L../common


CFLAGS			= $(INCLUDE_DIRS)
CFLAGS			+= -g
CFLAGS			+= -DLPC17xx
CFLAGS			+= -DUBERTOOTH_ONE
CFLAGS			+= -DUBERTOOTH_ONE
CFLAGS			+= -DTX_ENABLE
CFLAGS			+= -D'GIT_REVISION="2015-10-R1"' 
CFLAGS			+= -D'COMPILE_BY="root"'
CFLAGS			+= -D'COMPILE_HOST="yyc"'
CFLAGS			+= -D'TIMESTAMP="2016. 06. 30. (¸ñ) 08:33:10 UTC"'
CFLAGS			+= -D__thumb2__=1
CFLAGS			+= -fmessage-length=0
CFLAGS			+= -fno-builtin
CFLAGS			+= -ffunction-sections
CFLAGS			+= -fno-hosted
CFLAGS			+= -mcpu=cortex-m3
CFLAGS			+= -mthumb
CFLAGS			+= -mapcs-frame
CFLAGS			+= -msoft-float
CFLAGS			+= -mno-sched-prolog
CFLAGS			+= -mtune=cortex-m3
CFLAGS			+= -march=armv7-m
CFLAGS			+= -mfix-cortex-m3-ldrd
CFLAGS			+= -MMD
CFLAGS			+= -MP
CFLAGS			+= -MD
CFLAGS			+= -std=gnu99
CFLAGS			+= -Wa,-a,-ad
CFLAGS			+= -Wall
CFLAGS			+= -Wno-unused
CFLAGS			+= -Wno-comments
CFLAGS			+= -Wextra
CFLAGS			+= -Wa,-alhms=./bluetooth_rxtx.lst

LDFLAGS			= $(LIB_DIRS)
LDFLAGS			+= -T LPC17xx_Linker_Script_with_bootloader.ld 
LDFLAGS			+= -mcpu=cortex-m3
LDFLAGS			+= -mthumb
LDFLAGS			+= -mthumb-interwork
LDFLAGS			+= -Wl,-Map=$(TARGET).map
LDFLAGS			+= -Wl,--gc-sections
LDFLAGS			+= -static
LDFLAGS			+= -Wl,--start-group
LDFLAGS			+= -lc
LDFLAGS			+= -lg
LDFLAGS			+= -lgcc
LDFLAGS			+= -lm
LDFLAGS			+= -Wl,--end-group

#---------------------------------------------------------------------
CC				=	$(CROSS_PREFIX)gcc
CXX			 	=	$(CROSS_PREFIX)g++
AR				=	$(CROSS_PREFIX)ar rc
AR2				=	$(CROSS_PREFIX)ranlib
RANLIB			=	$(CROSS_PREFIX)ranlib
LD				=	$(CROSS_PREFIX)ld
NM				=	$(CROSS_PREFIX)nm
STRIP			=	$(CROSS_PREFIX)strip
OBJCOPY		 	=	$(CROSS_PREFIX)objcopy
OBJDUMP		 	=	$(CROSS_PREFIX)objdump
CP				=   cp
MV				=   mv
#--------------------------------------------------------------------

all : $(TARGET)

$(TARGET) : $(OBJS)
	$(CC) $(LDFLAGS) $(OBJS) -o $@.elf $(LIBS) 
	$(OBJCOPY) -O ihex $(TARGET).elf $(TARGET).hex
	$(OBJCOPY) -O binary $(TARGET).elf $(TARGET).bin
	$(OBJCOPY) -O srec $(TARGET).elf $(TARGET).srec
	$(OBJDUMP) -h -z -S  $(TARGET).elf > $(TARGET).lss
	$(NM)      -n $(TARGET).elf > $(TARGET).sym
	/usr/local/bin/ubertooth-dfu -s $(TARGET).bin

%.o:%.c
	@echo "Compiling $< ..."
	$(CC) -c $(CFLAGS) -o $@ $<

dep :
	$(CC)	-M	$(INCLUDE_DIRS)	$(SRCS) > .depend

clean:
	rm -f *.bak
	rm -f *.map
	rm -f *.o
	rm -f $(OBJS)
	rm -f $(TARGET).hex $(TARGET).bin $(TARGET).srec $(TARGET).dfu
	rm -f $(TARGET).lss $(TARGET).sym core

distclean: clean
	rm -rf .depend	


ifeq (.depend,$(wildcard .depend))
include .depend
endif

