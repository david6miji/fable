# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.5

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /work

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /work/build

# Utility rule file for ubertooth-specan-ui.

# Include the progress variables for this target.
include python/specan_ui/CMakeFiles/ubertooth-specan-ui.dir/progress.make

python/specan_ui/CMakeFiles/ubertooth-specan-ui: ../python/specan_ui/ubertooth-specan-ui


ubertooth-specan-ui: python/specan_ui/CMakeFiles/ubertooth-specan-ui
ubertooth-specan-ui: python/specan_ui/CMakeFiles/ubertooth-specan-ui.dir/build.make

.PHONY : ubertooth-specan-ui

# Rule to build all files generated by this target.
python/specan_ui/CMakeFiles/ubertooth-specan-ui.dir/build: ubertooth-specan-ui

.PHONY : python/specan_ui/CMakeFiles/ubertooth-specan-ui.dir/build

python/specan_ui/CMakeFiles/ubertooth-specan-ui.dir/clean:
	cd /work/build/python/specan_ui && $(CMAKE_COMMAND) -P CMakeFiles/ubertooth-specan-ui.dir/cmake_clean.cmake
.PHONY : python/specan_ui/CMakeFiles/ubertooth-specan-ui.dir/clean

python/specan_ui/CMakeFiles/ubertooth-specan-ui.dir/depend:
	cd /work/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /work /work/python/specan_ui /work/build /work/build/python/specan_ui /work/build/python/specan_ui/CMakeFiles/ubertooth-specan-ui.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : python/specan_ui/CMakeFiles/ubertooth-specan-ui.dir/depend

